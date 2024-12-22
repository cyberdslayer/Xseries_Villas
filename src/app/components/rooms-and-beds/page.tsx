import { Lora } from "next/font/google";
import {List} from "../list/list";
import RoomDetailsCard from "./room-details-card/roomDetailsCard";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "400"],
});

const Page = () => {
    return (
        <div>
          <h2 className={lora.className}>Rooms and Beds</h2>
        <List text="">
          <RoomDetailsCard />
          <RoomDetailsCard />
          <RoomDetailsCard />
        </List>
        </div>
    )
}

export default Page;