import RaiseLink from "./RaiseLink";

function DiscoverMore() {
  return (
    <div className="text-center">
      <div ><RaiseLink title="Discover More" link="#more" style="text-2xl font-semibold pb-10 pt-10 px-5"/></div>
      <div className="flex justify-center mb-20" style={{zIndex: -1, position: 'relative'}}>
        <div className="arrowSliding">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay1">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay2">
          <div className="arrow"></div>
        </div>
        <div className="arrowSliding delay3">
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverMore;
