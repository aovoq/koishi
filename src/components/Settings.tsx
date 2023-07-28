import { Box, Flex, Input } from '@kuma-ui/core'
import { useAtom } from 'jotai'
import { ChangeEvent, useCallback } from 'react'
import { settingAtom } from '../jotai'


const Settings = () => {
  const [setting, setSetting] = useAtom(settingAtom)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = e.target
    setSetting((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [setSetting])

  return (
    <details>
      <summary>設定</summary>
    <Flex flexWrap='wrap'>
      <Box>
        top: <Input type='number' name='paddingTop' value={setting.paddingTop} onChange={handleChange}/>
      </Box>
      <Box>
        left: <Input type='number' name='paddingLeft' value={setting.paddingLeft} onChange={handleChange}/>
      </Box>
      <Box>
        bottom: <Input type='number' name='paddingBottom' value={setting.paddingBottom} onChange={handleChange}/>
      </Box>
      <Box>
        right: <Input type='number' name='paddingRight' value={setting.paddingRight} onChange={handleChange}/>
      </Box>
      <Box>
        width: <Input type='number' name='width' value={setting.width} onChange={handleChange}/>
      </Box>
      <Box>
        height: <Input type='number' name='height' value={setting.height} onChange={handleChange}/>
      </Box>
      <Box>
        paddingColor: <Input type='color' name='paddingColor' value={setting.paddingColor} onChange={handleChange} />
      </Box>
      <Box>
        corner: <Input type='number' name='corner' value={setting.corner} onChange={handleChange}/>
      </Box>
    </Flex>
    </details>
  )
}

export default Settings
