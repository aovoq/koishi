import { Box, Button, Image, css } from '@kuma-ui/core'
import { toPng } from 'html-to-image'
import { useCallback, useRef } from 'react'
import Drop from './components/Drop'
import { useAtom } from 'jotai'
import Settings from './components/Settings'
import { fileAtom, settingAtom } from './jotai'


function App() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [file] = useAtom(fileAtom)
  const [setting] = useAtom(settingAtom)
  // const [loc, setLoc] = useAtom(locationAtom)

  // useEffect(() => {
  //   console.log(loc)
  //   console.log(loc.searchParams?.get('query'))
  //   loc.searchParams?.set('hoge', 'fuga')
  //   setLoc((prev) => {
  //     console.log('hoge', prev.searchParams)
  //     return {
  //       ...prev,
  //       searchParams: new URLSearchParams([
  //         ['hoge', 'fuga'],
  //         ...prev.searchParams.entries()
  //         ]),
  //     }
  //   })
  // }, [])

  const bundleExport = useCallback(() => {
    console.log('export', canvasRef.current)
    if (canvasRef.current === null) return
    toPng(canvasRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'line_rich-menu.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [canvasRef])

  return (
    <>
      <Drop />
      <Settings />
      {file && (
          <Button
          p={8}
          bg='black'
          color='white'
          borderRadius={0}
          _hover={{ opacity: 0.8 }}
          onClick={bundleExport}
          >
            export
          </Button>
        )}
      <Box as='main' display='flex' flexDir='column' alignItems='flex-start'>
        <div ref={canvasRef}>
          <Box
            bg={setting.paddingColor}
            pt={`${setting.paddingTop}px`}
            pl={`${setting.paddingLeft}px`}
            pb={`${setting.paddingBottom}px`}
            pr={`${setting.paddingRight}px`}
            width={`${setting.width}px`}
            height={`${setting.height}px`}
            className={css`
              box-sizing: border-box;
            `}
          >
            {file && (
              <Image
                src={file.toString()}
                width='100%'
                height='100%'
                borderRadius={`${setting.corner}px`}
                className={css`
                  object-fit: cover;
                  object-position: center;
                  pointer-events: none;
                `}
                display='block'
              />
            )}
          </Box>
        </div>
      </Box>
    </>
  )
}

export default App
