declare interface Msgs {
  msg: string;
  sender: string;
  type: string;
}
declare interface UserContext {
  user: string;
  setUser: React.SetStateAction;
}
