import { create } from 'zustand'

interface EditingStoreState {
  // title field
  title: string
  setTitle: (newTitle: string) => void
  // subtitle field
  subtitle: string
  setSubtitle: (newValue: string) => void
  // paragraph one fields
  paragraphOne: string,
  setParagraphOne: (newValue: string) => void
  // selectabe twitter link
  twitter_Profile: {
    value: string,
    enabled: boolean
  },
  toggleTwitterProfile: () => void
  setTwitterProfile: (newValue: string) => void
}

export const useEditingStore = create<EditingStoreState>()((set) => ({
  title: "DummyTitle",
  setTitle: (newTitle: string) => set(() => ({ title: newTitle })),
  subtitle: "DummySubtitle",
  setSubtitle: (newValue: string) => set(() => ({ subtitle: newValue })),
  paragraphOne: "Dummy P 1",
  setParagraphOne: (newValue: string) => set(() => ({ paragraphOne: newValue })),
  // twitter profile shit
  twitter_Profile: {
    value: "my_twitter profile",
    enabled: true
  },
  toggleTwitterProfile: () => set((state) => ({
    twitter_Profile: {
      ...state.twitter_Profile,
      enabled: !state.twitter_Profile.enabled
    }
  })),
  setTwitterProfile: (newValue: string) => set((state) => ({
    twitter_Profile: {
      ...state.twitter_Profile,
      value: newValue
    }
  }))
}))


