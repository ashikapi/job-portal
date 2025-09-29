import { useEffect, useState, useRef } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { SiShopware } from "react-icons/si";
import { HiOutlineFlag } from "react-icons/hi";
import { GiTargeting } from "react-icons/gi";
import { MdOutlineSchedule } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import { BsArrowUpCircle } from "react-icons/bs";
import { IoIosPeople, IoIosAddCircleOutline } from "react-icons/io";
import ClickEarnChart from "../components/ClickEarnChart";

const UserDashboard = () => {
  const [remainingTime, setRemainingTime] = useState("");
  const timerRef = useRef(null);

  // Fixed target time (for example, 24 hours from now)
  const targetTime = new Date("2025-10-10T00:00:00").getTime(); // Set your target time here

  // Function to update the remaining time
  const updateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const diffInSeconds = Math.floor((targetTime - currentTime) / 1000);

    if (diffInSeconds <= 0) {
      setRemainingTime("Time is up!");
      clearInterval(timerRef.current);
      return;
    }

    const days = Math.floor(diffInSeconds / (3600 * 24));
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    const formattedTime = `${days}d: ${hours}h ${minutes}m ${seconds}s`;
    setRemainingTime(formattedTime);
  };

  useEffect(() => {
    timerRef.current = setInterval(updateRemainingTime, 1000);

    // Initial call to set the first value immediately
    updateRemainingTime();

    // Cleanup the timer on unmount
    return () => clearInterval(timerRef.current);
  }, [targetTime]);

  const dashboardDetails = [
    {
      cardNames: [
        "Total Deposit",
        "Total Withdraw",
        "My Plan",
        "Total Clicks",
        "Today's Clicks",
        "Remaining Clicks",
        "Next Reminder",
        "Referral Commissions",
        "Active Ads",
      ],
      cardDetails: [
        "0.00 USD",
        "0.00 USD",
        "Free Plan",
        "333",
        "0",
        "100",
        remainingTime, // This will be dynamically updated
        "0.00 USD",
        "0",
      ],
      icons: [
        <FaRegMoneyBillAlt className="text-2xl" />,
        <SiShopware className="text-2xl" />,
        <HiOutlineFlag className="text-2xl" />,
        <GiTargeting className="text-2xl" />,
        <MdOutlineSchedule className="text-2xl" />,
        <FiZap className="text-2xl" />,
        <BsArrowUpCircle className="text-2xl" />,
        <IoIosPeople className="text-2xl" />,
        <IoIosAddCircleOutline className="text-2xl" />,
      ],
      colors: [
        "bg-blue-500", // Total Deposit
        "bg-green-500", // Total Withdraw
        "bg-purple-500", // My Plan
        "bg-yellow-500", // Total Clicks
        "bg-orange-500", // Today's Clicks
        "bg-teal-500", // Remaining Clicks
        "bg-pink-500", // Next Reminder
        "bg-red-500", // Referral Commissions
        "bg-indigo-500", // Active Ads
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dashboardDetails[0].cardNames.map((cardName, index) => (
          <div
            key={index}
            className="hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex justify-center items-center w-full py-1 bg-black rounded-t-lg">
              <div className="text-white text-4xl mr-4">
                {dashboardDetails[0].icons[index]}
              </div>
              <div className="text-white text-lg font-semibold">{cardName}</div>
            </div>
            <div
              className={`p-6 rounded-b-lg shadow-lg flex flex-col items-center justify-center ${dashboardDetails[0].colors[index]}`}
            >
              <div className="text-white text-2xl mt-2">
                {dashboardDetails[0].cardDetails[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ClickEarnChart />
      </div>
    </div>
  );
};

export default UserDashboard;
