import { defineStore } from "pinia";
export const useSocketStatusStore = defineStore("socketStore", () => {
  const socketStatus = ref<boolean>(false);
  const history = ref<string[]>([]);
  const openSocket = () => {
    socketStatus.value = true;
  };
  const closeSocket = () => {
    history.value = [];
    socketStatus.value = false;
  };
  return { socketStatus,history, openSocket, closeSocket };
});
