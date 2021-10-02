import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getSingleRoom } from "../../../controllers/roomControllers";

dbConnect();

const handler = nc();

handler.get(getSingleRoom);

export default handler;
