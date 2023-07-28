import { Box, Input } from "@kuma-ui/core"
import { useSetAtom } from "jotai"
import { ChangeEvent, useCallback } from "react"
import { fileAtom } from "../jotai"


const Drop = () => {
  const setFile = useSetAtom(fileAtom)

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    console.log('change')
    const reader = new FileReader()
    reader.onload = (e) => {
      setFile(e.target?.result)
    }
    reader.readAsDataURL(event.target.files![0])
  }, [setFile])

  return (
    <Box>
      <Input type="file" onChange={handleChange}/>
    </Box>
  )
}

export default Drop