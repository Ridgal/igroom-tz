import { create } from "zustand";

interface ProfileUIState {
  showDetails: boolean;
  toggleDetails: () => void;
}

export const useProfileUIStore = create<ProfileUIState>((set) => ({
  showDetails: false,
  toggleDetails: () => set((state) => ({ showDetails: !state.showDetails })),
}));
