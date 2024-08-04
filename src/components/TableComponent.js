import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import Profile from "./Profile";

const rows = [
  {
    name: "Devon Lane",
    orderno: 34567890,
    amount: 8.9,
    status: "Shipped",
  },
  {
    name: "Courtney Henry",
    orderno: 23456789,
    amount: 22.1,
    status: "Delivered",
  },
  {
    name: "Ronald Richards",
    orderno: 12345678,
    amount: 10.3,
    status: "Cancelled",
  },
  {
    name: "Cameron Williamson",
    orderno: 98765432,
    amount: 19.5,
    status: "In Transit",
  },
  {
    name: "Ronald Richards",
    orderno: 12345678,
    amount: 10.3,
    status: "Cancelled",
  },
  {
    name: "Cameron Williamson",
    orderno: 98765432,
    amount: 19.5,
    status: "In Transit",
  },
];

const CustomHeadCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "600",
  fontFamily: "poppins",
  borderBottom: "1px solid #35383f",
  color: "#e4e3e6",
  backgroundColor: "#202028",
}));

const CustomBodyCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "400",
  fontFamily: "poppins",
  borderBottom: "1px solid #35383f",
  color: "#e4e3e6",
}));

const TableComponent = () => {
  return (
    <div className="bg-[#202028] rounded-md p-4">
      <h2 className="p-4 text-gray-300 font-extrabold text-xl">
        Recent Orders
      </h2>
      <TableContainer
        sx={{
          bgcolor: "#202028",
          fontFamily: "poppins",
          width: "100%",
          maxHeight: 400, // Set a max height if you want the vertical scrollbar
          overflowY: "auto", // Enable vertical scrolling
          "&::-webkit-scrollbar": {
            width: "2px", // Width of the scrollbar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#202028", // Track color
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Thumb color
            borderRadius: "2px", // Rounded corners
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555", // Thumb color on hover
          },
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomHeadCell>Customer</CustomHeadCell>
              <CustomHeadCell align="center">Order No.</CustomHeadCell>
              <CustomHeadCell align="center">Amount</CustomHeadCell>
              <CustomHeadCell align="center">Status</CustomHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const bgColor =
                row.status === "Delivered" ||
                row.status === "Shipped" ||
                row.status === "In Transit"
                  ? "#175347"
                  : "#5f3338";

              const textColor =
                row.status === "Delivered" ||
                row.status === "Shipped" ||
                row.status === "In Transit"
                  ? "#0aa176"
                  : "#c25051";
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <CustomBodyCell
                    sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                  >
                    <Profile />
                    {row.name}
                  </CustomBodyCell>
                  <CustomBodyCell align="center">{row.orderno}</CustomBodyCell>
                  <CustomBodyCell align="center">${row.amount}</CustomBodyCell>
                  <CustomBodyCell align="center">
                    <div
                      className="p-1 rounded-full text-xs"
                      style={{ backgroundColor: bgColor, color: textColor }}
                    >
                      {row.status}
                    </div>
                  </CustomBodyCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
