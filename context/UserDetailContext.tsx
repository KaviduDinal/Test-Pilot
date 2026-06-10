import React from "react";

export interface IUserDetailContext {
  userDetails?: any;
  setUserDetails?: React.Dispatch<React.SetStateAction<any>>;
}

export const UserDetailContext = React.createContext<IUserDetailContext | null>(null);

export default UserDetailContext;
