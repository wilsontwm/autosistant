import Axios, { AxiosResponse, AxiosError } from 'axios';
import Swal from 'sweetalert2';

interface ErrorResponse {
  message: string;
  error: string;
}

const httpClient = Axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

httpClient.interceptors.request.use((config) => {
  config.headers['X-Authorization'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaW5rZWRJbklkIjoid2lsc29uLXdlaS1taW5nLXRhbi0xMTIxNjk3YiIsIm5hbWUiOiJXaWxzb24gV2VpIE1pbmcgVGFuIn0.tN_vmT5Ytj1PkUy1ROZrGDTLVc3IbnZu08PzY3w3hUw';
  //   if (!config.url?.includes('login')) {
  //     const token = getToken();
  //     if (
  //       config != undefined &&
  //       config.headers != undefined &&
  //       token != undefined
  //     ) {
  //       config.headers.token = token;
  //     }
  //   }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errorResponse = error.response?.data as ErrorResponse;

    if (
      error.response?.status == 401 ||
      error.response?.status == 403 ||
      errorResponse.error == 'invalid token'
    ) {
      Swal.fire('Session end', 'Some issue has occured', 'info');
      setTimeout(() => {
        // if (process.browser) {
        //   window.location.href = '/';
        // }
      }, 1000);
      return;
    }

    Swal.fire({
      title: errorResponse.error,
      icon: 'error',
      timer: 2000,
      showConfirmButton: false,
    });

    Promise.reject(error);
    throw error;
  }
);

const fetching = (
  uri: string,
  method: string,
  body?: {},
  header?: {}
): Promise<AxiosResponse<any, any>> => {
  const url = 'https://easysource.hirequotient.com/api' + uri;
  switch (method) {
    case 'GET':
      return httpClient.get(url);
    case 'POST':
      return httpClient.post(url, body);
    case 'PUT':
      return httpClient.put(url, body);
    case 'PATCH':
      return httpClient.patch(url, body);
    case 'DELETE':
      return httpClient.delete(url, body);
  }
  return httpClient.get(url);
};

const GET = (uri: string, body?: {}, header?: {}) =>
  fetching(uri, 'GET', body, header);
const POST = (uri: string, body?: {}, header?: {}) =>
  fetching(uri, 'POST', body, header);
const PATCH = (uri: string, body?: {}, header?: {}) =>
  fetching(uri, 'PATCH', body, header);
const PUT = (uri: string, body?: {}, header?: {}) =>
  fetching(uri, 'PUT', body, header);
const DELETE = (uri: string, body?: {}, header?: {}) =>
  fetching(uri, 'DELETE', body, header);

export default {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
};
