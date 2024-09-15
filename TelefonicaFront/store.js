import {create} from "zustand"

export const useLineaTelefonica = create((set) => ({
    lineaTelefonica: null,
    setLineaTelefonica : (new_val)=>(set(()=>({lineaTelefonica : new_val}))),
}));


