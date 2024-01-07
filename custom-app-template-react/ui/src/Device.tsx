import { useEffect, useRef, useState, forwardRef } from 'react'
import { isEnvBrowser } from './utils/misc'
import './themes.css'
import './device.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
  const [transformScale, setTransformScale] = useState(1)
  const deviceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isEnvBrowser()) return;
    const resizeHandler = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const deviceWidth = deviceRef.current?.offsetWidth ?? 375;
      const deviceHeight = deviceRef.current?.offsetHeight ?? 812;
      const scale = Math.min(width / deviceWidth, height / deviceHeight) * 0.82
      setTransformScale(scale);
    }
    document.body.style.visibility = "visible";
    document.body.style.display = "block";
    document.body.style.backgroundColor = "black";
    document.body.dataset.theme = "dark";
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [])

  return (
    <DeviceProvider ref={deviceRef} style={{ transform: `scale(${transformScale})` }}>
      <div id="application">
        <RouterProvider router={router} />
      </div>
    </DeviceProvider>
  )
}

type DeviceProps = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const DeviceProvider = forwardRef<HTMLDivElement, DeviceProps>(({ children, style }, ref) => {
  return isEnvBrowser() ? <section id="phone-device" ref={ref} className='absolute right-[3%] inline p-6 rounded-[60px] w-[42rem] h-[88.5rem] bottom-0 box-content origin-bottom-right mb-8 select-none' style={style}>{children}</section> : children
})

export default App
