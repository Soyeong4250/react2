export const Link = ({to, ...rest}) => {
  const handleClick = e => {
    e.preventDefault();  // 링크를 클릭했을 때 서버로 요청을 보내지 않기 위해
  }

  return <a {...rest} href={to} onClick={handleClick} />
}