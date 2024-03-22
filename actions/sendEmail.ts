"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // "use server";
  // console.log("Running on server");
  // console.log(formData.get("senderEmail"));
  // console.log(formData.get("message"));

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  //Simple server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

//   try{
//     await resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: "ternoboy@gmail.com",
//         subject: "Message from contact form",
//         reply_to: senderEmail as string,
//         text: message as string,
//         // text: "Hello world!",
//       });
//   }catch (error){
//     return {
//         error: error.message,
//     }
//   }
};
