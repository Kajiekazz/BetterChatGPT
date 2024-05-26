export const officialAPIEndpoint = 'https://api.chatanywhere.tech/v1/chat/completions';
const customAPIEndpoint = 'sk-BsGCGo2c7Jmaio6yJBO8CtI9o5Kud9v4vU0E97tArM5uvgkP';
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://chatgpt-api.shn.hk/v1/';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
