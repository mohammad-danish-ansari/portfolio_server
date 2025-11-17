// import BookingReq from "../../../../model/bookingReqModel.js";
import ContactReq from "../../../../model/contactReqModel.js";
import emailBookingDetails from "../../../../model/helpers/email.js";
import MESSAGES from "../../../../model/helpers/messagehelper.js";

export const getAllContactBooking = async (req, res) => {
  try {
    // ContactReq
    let existsContactReq = await ContactReq.find({});
    if (!existsContactReq) {
      // res.status(404).json({ message: "User not found" });
      res
        .status(MESSAGES.rescode.HTTP_NOT_FOUND)
        .json({ message: MESSAGES.apiErrorStrings.DATA_NOT_EXISTS("ContactReq") });
    } else {
      res.status(MESSAGES.rescode.HTTP_OK).json({ data: existsContactReq });
    }
  } catch (error) {
    return res
      .status(MESSAGES.rescode.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.apiErrorStrings.SERVER_ERROR, error });
  }
};


export const createContactBooking = async (req, res) => {

  try {
    const existsContactReq = await ContactReq.findOne({
      email: req.body.email.toLowerCase(),
    });

    // if (existsContactReq) {
    //   return res.status(MESSAGES.rescode.HTTP_BAD_REQUEST).json({
    //     message: MESSAGES.apiErrorStrings.Data_EXISTS("Booking Request"),
    //   });
    // }

    const newBooking = new ContactReq({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    await newBooking.save();
    await emailBookingDetails(newBooking);
    return res.status(MESSAGES.rescode.HTTP_CREATE).json({
      message: MESSAGES.apiSuccessStrings.ADDED("Your Message"),
      data: {
        ContactReq: newBooking,
      },
    });
  } catch (error) {
    return res
      .status(MESSAGES.rescode.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.apiErrorStrings.SERVER_ERROR, error });
  }
};


export const deleteByIdContactBooking = async (req, res) => {
  let ContactReq = await ContactReq.findByIdAndDelete(req.params.id);

  if (!ContactReq) {
    res.status(404).json({ message: "ContactReq not found" });
  }
  return res
    .status(201)
    .json({ message: "ContactReq deleted successfully", data: ContactReq });
};