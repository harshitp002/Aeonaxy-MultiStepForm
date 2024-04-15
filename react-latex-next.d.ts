declare module 'react-latex-next' {
    import { ReactNode } from 'react';
  
    export interface LatexProps {
      math: string;
      display?: boolean;
      children?: ReactNode;
    }
  
    export default function ReactLatex(props: LatexProps): JSX.Element;
  }