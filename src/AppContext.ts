import { createContext } from "react";
import { Note } from "./types";

export interface IAppContext {
  notes: Note[];
  toggleStarNote: (noteId: number) => void;
  deleteNote: (noteId: number) => void;
}

export const AppContext = createContext<IAppContext>({
  notes: [],
  toggleStarNote: () => {},
  deleteNote: () => {},
});
