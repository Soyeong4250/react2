import * as MyRouter from '../lib/MyRouter';

const Title = ({ backUrl = false, children }) => {
  if (backUrl) {
    return (<>
      {/* <a href={backUrl} /> */}
      <MyRouter.Link to={backUrl} />
      <h1 style={{paddingRight: "44px"}}>{children}</h1>
    </>);
  }

  return <h1>{children}</h1>
};

export default Title;
