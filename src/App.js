import { useEffect, useState } from 'react'
import Router from './router/router'
// import ReactLoading from 'react-loading'
import running from './assests/bgimage/runningdog.gif'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, [2000])
  }, [])
  return (
    <div className="App">
      {loading ? (
        // <ReactLoading
        //   type={"spin"}
        //   width={50}
        //   height={50}
        //   color="#f2940c"
        //   className="absolute top-[50%] left-[50%]"
        // />
        <img src={running} className="absolute  left-[30%]" />
      ) : (
        <div>
          <Router />
        </div>
      )}
    </div>
  )
}

export default App
