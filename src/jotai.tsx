import { atom } from 'jotai'
import {atomWithLocation } from 'jotai-location'

export const fileAtom = atom<FileReader['result'] | undefined>('')
export const settingAtom = atom({
  paddingTop: 30,
  paddingLeft: 30,
  paddingBottom: 15,
  paddingRight: 15,
  width: 1666,
  height: 843,
  paddingColor: '#ffffff',
  corner: 10,
})

export const locationAtom = atomWithLocation()