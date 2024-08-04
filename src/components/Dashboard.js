import Reports from "./Reports"
import Netprofit from "./Netprofit"
import Highlights from "./Highlights"
import BarChart from "./BarChart"
import TableComponent from "./TableComponent"
import Reviews from "./Reviews"

const Dashboard = () => {
    return(
        <div className="p-4 flex flex-col gap-4 flex-grow">
          <h2 className="text-[#f4f4f5] text-xl font-bold">Dashboard</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-8/12 font-poppins">
              <Reports />
            </div>
            <div className="flex-grow">
              <Netprofit />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className=" lg:w-8/12 font-poppins">
              <BarChart />
            </div>
            <div className="flex-grow">
                <Highlights />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className=" lg:min-w-[66.67%] font-poppins">
              <TableComponent />
            </div>
            <div className="flex-grow">
                <Reviews />
            </div>
          </div>
        </div>
    )
}

export default Dashboard