import { Box } from "@chakra-ui/layout";
import { useState } from "react";

import MyChats from "../components/Chats";
import Chatbox from "../components/Chatbox";
import { ChatState } from "../context/provider";
import SideDrawer from "../components/SideDrawer";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
console.log(user);
  return (
    <div style={{ width: "100%" }}>
      {/* {user && <SideDrawer />} */}
      { user && <SideDrawer />}
      <Box d="flex" style={{display:"flex"}} justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user &&(
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {/* {<MyChats fetchAgain={fetchAgain} />} */}
       
      </Box>
    </div>
  );
};

export default Chatpage;