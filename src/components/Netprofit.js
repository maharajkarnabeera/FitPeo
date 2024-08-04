import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const RoundedCircularProgress = styled(CircularProgress)(({ theme }) => ({
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
  },
}));

function CircularProgressWithLabel({ value }) {
  return (
    <div className="relative block">
      <RoundedCircularProgress
        variant="determinate"
        value={100}
        size={90}
        thickness={5}
        style={{ color: "#273161" }}
      />
      <RoundedCircularProgress
        variant="determinate"
        value={value}
        size={90}
        thickness={5}
        style={{ position: "absolute", left: 0, color: "#7194fe" }}
      />
      <div className="top-0 left-0 right-0 bottom-0 absolute pt-5">
        <div className="flex flex-col items-center justify-center">
          <div>{`${Math.round(value)}%`}</div>
          <div className="text-[8px] flex flex-wrap justify-center items-center flex-col"><span>Goal</span> <span>Completed</span></div>
        </div>
      </div>
    </div>
  );
}

const Netprofit = () => {
  return (
    <div className="flex font-poppins h-[150px] justify-between items-center z-0 bg-[#202028] rounded-md p-4 text-gray-200">
      <div>
        <h2 className="text-xs">Net Profit</h2>
        <div className="text-2xl py-2 font-bold">$ 9759.25</div>
        <div className="flex items-center text-[#53a744]">
          <FontAwesomeIcon icon={faCaretUp} size="1x" />
          <span className="ml-2">3%</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <CircularProgressWithLabel value={86} />
        <p className="text-[8px] mt-2">*The values has been rounded off</p>
      </div>
    </div>
  );
};

export default Netprofit;
