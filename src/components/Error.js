import { useRouteError } from "react-router-dom"
function Error() {
    const err = useRouteError();
    console.log(err)
  return (
    <div>Error 404 not found</div>
  )
}

export default Error