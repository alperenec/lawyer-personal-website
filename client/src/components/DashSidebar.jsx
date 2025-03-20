import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      // API URL'sini tam olarak belirtin (göreceli URL yerine)
      const res = await fetch("http://localhost:3000/api/user/signout", {
        method: "POST",
        credentials: "include", // Cookie'lerin gönderilmesini sağlar
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full md:w-56 bg-gray-800 text-white min-h-screen">
      <div className="flex flex-col gap-1 p-3">
        {currentUser && currentUser.isAdmin && (
          <Link to="/dashboard?tab=dash">
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                tab === "dash" || !tab ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <HiChartPie className="text-xl" />
              <span>Dashboard</span>
            </div>
          </Link>
        )}
        <Link to="/dashboard?tab=profile">
          <div
            className={`flex items-center gap-2 p-3 rounded-lg ${
              tab === "profile" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <HiUser className="text-xl" />
            <span>Profile</span>
            <span
              className={`ml-auto text-xs px-2 py-1 rounded ${
                currentUser.isAdmin ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {currentUser.isAdmin ? "Admin" : "User"}
            </span>
          </div>
        </Link>
        {currentUser.isAdmin && (
          <Link to="/dashboard?tab=posts">
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                tab === "posts" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <HiDocumentText className="text-xl" />
              <span>Posts</span>
            </div>
          </Link>
        )}
        {currentUser.isAdmin && (
          <>
            <Link to="/dashboard?tab=users">
              <div
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  tab === "users" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <HiOutlineUserGroup className="text-xl" />
                <span>Users</span>
              </div>
            </Link>
          </>
        )}
        <div
          onClick={handleSignout}
          className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
        >
          <HiArrowSmRight className="text-xl" />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
}
