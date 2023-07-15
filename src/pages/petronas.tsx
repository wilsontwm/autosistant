import { FC, useState, useRef, useMemo, useEffect } from 'react';
import _ from 'lodash';
import { ReactSVG } from 'react-svg';
import PetronasLogo from '../images/petronas/petronas.svg';
import PetronasOnlyLogo from '../images/petronas/petronas-logo.svg';
import UserLogo from '../images/petronas/user.svg';
import {
  useContinueConversation,
  useGetConversation,
  useStartConversation,
  Candidate,
} from '../hooks/petronas';

interface Message {
  isBot: boolean;
  message: string;
}

const initalMessages: Message[] = [
  {
    isBot: true,
    message:
      'Hello, I am Autosistant. Let me know what type of candidates you are looking for.',
  },
];

const CandidateCard: FC<Candidate> = ({
  _id,
  name,
  title,
  profileImage,
  profileUrl,
}) => {
  return (
    <li
      key={name}
      className="p-3 mx-3 bg-white flex flex-row gap-5  rounded-md"
    >
      <img
        className="h-20 w-20 flex-none rounded-full object-cover"
        src={
          profileImage == '-'
            ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
            : profileImage
        }
        alt=""
      />
      <div className="max-w-xl flex-auto">
        <h3 className="text-base tracking-tight text-gray-600">{name}</h3>
        <p className="text-xs text-gray-600">{title}</p>
        <ul role="list" className="flex mt-1">
          <li>
            <a
              href={profileUrl}
              target="_blank"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

const Message: FC<Message> = ({ message, isBot }) => {
  return (
    <div
      className={`${isBot ? 'justify-end' : 'justify-start'} flex my-2.5 px-3`}
    >
      {isBot ? (
        <>
          <div
            className={`py-3 px-4 text-white ${
              isBot
                ? 'mr-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl'
                : 'ml-2 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl'
            }`}
          >
            {message}
          </div>
          <ReactSVG
            src={isBot ? PetronasOnlyLogo : UserLogo}
            className="object-cover h-8 w-8 rounded-full"
            alt="Chat Avatar"
          />
        </>
      ) : (
        <>
          <ReactSVG
            src={isBot ? PetronasOnlyLogo : UserLogo}
            className="object-cover h-8 w-8 rounded-full"
            alt="Chat Avatar"
          />
          <div
            className={`py-3 px-4 text-white ${
              isBot
                ? 'mr-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl'
                : 'ml-2 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl'
            }`}
          >
            {message}
          </div>
        </>
      )}
    </div>
  );
};

const Petronas = () => {
  const [conversationId, setConversationId] = useState<string>('');
  const [isFollowUp, setIsFollowUp] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initalMessages);
  const searchRef = useRef<HTMLTextAreaElement>(null);

  const appendMessage = (msg: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { message: msg, isBot }]);
  };

  const resetMessages = () => {
    setConversationId('');
    setIsFollowUp(false);
    setMessages(initalMessages);
  };

  const { data, isLoading: isDataLoading } = useGetConversation(
    !!conversationId && !isFollowUp,
    conversationId
  );

  const startConversation = useStartConversation({
    onSuccess: (data) => {
      setConversationId(data._id!);
      setIsFollowUp(data.isFollowUp);
      data.messages.map((ele) => appendMessage(ele.message, ele.isBot));
    },
  });

  const continueConversation = useContinueConversation({
    onSuccess: (data) => {
      setIsFollowUp(data.isFollowUp);
      data.messages.map((ele) => appendMessage(ele.message, ele.isBot));
    },
  });

  const suggestions: Candidate[] = useMemo(() => {
    if (!conversationId) return [];
    for (const message of data?.data.messages ?? []) {
      if (_.size(message.candidates) > 0) {
        return message.candidates;
      }
    }
    return [];
  }, [data, conversationId]);

  const isLoading =
    startConversation.mutation.isLoading ||
    continueConversation.mutation.isLoading;

  const sendMessage = (msg: string) => {
    searchRef.current!.value = '';
    appendMessage(msg, false);
    !isFollowUp
      ? startConversation.mutate({ message: msg, repeat: false })
      : continueConversation.mutate({
          message: msg,
          conversationId: conversationId,
          repeat: false,
        });
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="max-w-lg mx-auto">
        <div className="h-screen flex flex-col">
          <div className="header bg-white flex justify-center py-4">
            <ReactSVG src={PetronasLogo} className="" alt="Petronas" />
          </div>
          <div className="body bg-gray-200 grow overflow-scroll">
            <div id="chat-body">
              {messages.map((ele) => (
                <Message message={ele.message} isBot={ele.isBot} />
              ))}
            </div>
            <div id="suggestion">
              <ul
                role="list"
                className="space-y-3 divide-y divide-gray-200 xl:col-span-3 mb-3"
              >
                {suggestions.map((ele) => (
                  <CandidateCard
                    _id={ele._id}
                    name={ele.name}
                    title={ele.title}
                    profileImage={ele.profileImage}
                    profileUrl={ele.profileUrl}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="footer p-2 bg-white">
            {_.size(suggestions) == 0 && (
              <>
                <textarea
                  disabled={isLoading}
                  ref={searchRef}
                  name="message"
                  id="message"
                  placeholder="I want to search for senior software engineers using Java with 5 years of experience."
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                <div className="flex justify-center">
                  <button
                    disabled={isLoading}
                    type="button"
                    className="cursor-pointer block w-full rounded-md my-3 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                    style={{ backgroundColor: '#03AE9D' }}
                    onClick={() => sendMessage(searchRef.current?.value || '')}
                  >
                    {isLoading ? 'Loading...' : 'Send Message'}
                  </button>
                </div>
              </>
            )}
            <div className="flex justify-center">
              <button
                disabled={isLoading}
                className="mx-auto text-sm text-gray-500"
                onClick={resetMessages}
              >
                Restart search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petronas;
