import { useState } from 'react';
import https from '../helpers/http';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import querystring from 'querystring';
import _ from 'lodash';
import Swal from 'sweetalert2';

const KEYS = {
  conversation: 'conversation',
};

export interface Conversation {
  _id?: string;
  isFollowUp: boolean;
  messages: {
    message: string;
    isBot: boolean;
  }[];
}

interface ConversationRequest {
  conversationId?: string;
  message: string;
  repeat: boolean;
}

interface StartConversationResponse {
  data: {
    conversation: {
      _id: string;
      name: string;
      createdBy: number;
      belongsTo: number;
      messages: {
        message: string;
        fromUser: boolean;
        candidates: any[];
        waitingForCandidates: boolean;
        disableInput: boolean;
        _id: string;
        timestamp: string;
        suggestions: any[];
        messageNextState?: string;
      }[];
      gptFilters: any[];
      currentState: string;
      conversationStatus: string;
      liUrl: any[];
      filters: any[];
      gptMessages: any[];
      createdAt: string;
      updatedAt: string;
      conversationTopic: string;
    };
    reply: {
      fromUser: boolean;
      message: string;
    }[];
  };
}

interface ContinueConversationResponse {
  data: {
    reply: {
      fromUser: boolean;
      message: string;
      suggestions: any[];
      disableInput: boolean;
      waitingForCandidates: boolean;
      messageNextState?: string;
    }[];
    reason: string;
  };
}

export interface Candidate {
  _id: string;
  name: string;
  profileUrl: string;
  title: string;
  profileImage: string;
}

interface GetConversationResponse {
  data: {
    messages: {
      message: string;
      fromUser: boolean;
      candidates: Candidate[];
    }[];
  };
  currentState: string;
}

export function useStartConversation({
  onSuccess,
}: {
  onSuccess?: (conv: Conversation) => void;
}) {
  const mutateFn = async (payload: ConversationRequest) => {
    let url = `/conversation/start`;
    const response = await https.POST(url, payload);
    return response.data as StartConversationResponse;
  };

  const mutation = useMutation(mutateFn, {
    onSuccess: async (data) => {
      const result: Conversation = {
        _id: data.data.conversation._id,
        isFollowUp: data.data.conversation.currentState === 'FOLLOWUP',
        messages: data.data.reply.map((msg) => {
          return {
            message: msg.message,
            isBot: !msg.fromUser,
          };
        }),
      };

      if (onSuccess) onSuccess(result);
    },
  });

  return {
    mutation: mutation,
    mutate: (payload: ConversationRequest) => mutation.mutate(payload),
  };
}

export function useContinueConversation({
  onSuccess,
}: {
  onSuccess?: (conv: Conversation) => void;
}) {
  const mutateFn = async (payload: ConversationRequest) => {
    let url = `/conversation/${payload.conversationId!}/continue`;
    const response = await https.POST(url, payload);
    return response.data as ContinueConversationResponse;
  };

  const mutation = useMutation(mutateFn, {
    onSuccess: async (data) => {
      const result: Conversation = {
        isFollowUp: !data.data.reply[0]?.waitingForCandidates,
        messages: data.data.reply.map((msg) => {
          return {
            message: msg.message,
            isBot: !msg.fromUser,
          };
        }),
      };

      if (onSuccess) onSuccess(result);
    },
  });

  return {
    mutation: mutation,
    mutate: (payload: ConversationRequest) => mutation.mutate(payload),
  };
}

export function useGetConversation(enabled: boolean, conversationId?: string) {
  const queryFn = async () => {
    let url = `/conversation/${conversationId}`;

    const response = await https.GET(url);
    return response.data as GetConversationResponse;
  };

  const isResultFetched = (data: GetConversationResponse | undefined) => {
    if (!data || !enabled) return false;
    for (const message of data?.data.messages ?? []) {
      if (_.size(message.candidates) > 0) {
        return true;
      }
    }
    return false;
  };

  return useQuery([KEYS.conversation, conversationId], queryFn, {
    enabled,
    refetchInterval: (data) => (isResultFetched(data) ? false : 5000),
  });
}
