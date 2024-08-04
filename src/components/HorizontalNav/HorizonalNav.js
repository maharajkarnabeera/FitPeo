import TextField from "@mui/material/TextField";
import LogoIcon from "../../assets/windows-8.png";
import Profile from "../Profile";
import EmailIcon from "../../assets/email.png";
import NotificationsIcon from "../../assets/bell.png";
import SettingsIcon from "../../assets/setting.png";

const HorizontalNav = () => {
  return (
    <div className="flex h-[12vh] justify-between items-center flex-wrap p-4 bg-[#202028]">
      <div className="flex">
        <img
          src={LogoIcon}
          className="mr-4 object-cover h-8 w-8"
          alt="logo"
        />
        <TextField
          InputProps={{
            style: {
              color: "#9b9b9e",
            },
          }}
          sx={{
            width: "240px", // Set the width
            height: "36px", // Set the height
            "& .MuiInputBase-root": {
              height: "100%", // Ensure the input height matches the TextField height
            },
            "@media (max-width:600px)": {
              width: "80px", // 50% of the parent container on medium screens and above
            },
          }}
          className="bg-[#2a2b30] text-gray-300 rounded-md"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-1 lg:gap-2">
        <div className="p-2 rounded-full bg-[#44454a]">
          <img height={16} width={16} src={EmailIcon} alt="Email Icon" />
        </div>
        <div className="p-2 rounded-full bg-[#44454a]">
          <img height={16} width={16} src={SettingsIcon} alt="settings icon" />
        </div>
        <div className="p-2 rounded-full bg-[#44454a]">
          <img
            height={16}
            width={16}
            src={NotificationsIcon}
            alt="Notification Icon"
          />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default HorizontalNav;
