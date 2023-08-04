import { useRouteError } from "react-router-dom";

const Error = () => {
    const arr = useRouteError()
    console.log(arr)
  return (
    <div>{arr.status}</div>
  )
}
export default Error;

