import useUserInfo from "../utils/custom-hooks/useUserInfo"

const Contact = () => {
  const userInfo = useUserInfo();
  return (
    <>
    <div>Contact us page</div>
    <p>Contact name: {userInfo.name}</p>
    <img src={userInfo.avatar_url} height={150} width={150}/>
    </>
  )
}

export default Contact