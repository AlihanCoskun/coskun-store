export type MessageType = 'success' | 'info' | 'error';

export interface SnackbarData {
  messageType: MessageType;
  message: string;
}