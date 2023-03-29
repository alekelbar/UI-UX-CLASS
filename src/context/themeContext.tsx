import { Theme } from "@mui/material";
import { createContext } from "react";

type toggleType = (light: boolean) => void;

export const ThemeContext = createContext<null | toggleType>(null);