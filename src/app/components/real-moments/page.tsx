import {List} from "../list/list";
import { PhotoCard } from "./photo-card/photoCard";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "400"],
});

const RealMoments = () => {
  return (
    <div>
        <h2 className={lora.className}>Real Moments</h2>
      <List text="" >
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </List>
    </div>
  );
};

export default RealMoments;
