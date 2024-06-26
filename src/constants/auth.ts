export const officialAPIEndpoint = 'https://api.chatanywhere.tech/v1/chat/completions';
const customAPIEndpoint = 'https://api.chatanywhere.tech/v1/chat/completions';
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://api.chatanywhere.tech/v1/';
export const defaultAPIEndpoint = 'https://api.chatanywhere.tech/v1/chat/completions';
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
