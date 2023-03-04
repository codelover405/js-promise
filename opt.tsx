import Image from "next/image";
import React, { useState } from "react";
import back from "../public/assets/img/back.svg";
import Router from "next/router";
import OtpInput from "react-otp-input";
import { Button } from "@roketid/windmill-react-ui";
import Link from "next/link";
const OTP = () => {
    const [otp, setOtp] = useState("");
    const [error, seterror] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [otpColor, setOtpColor] = useState(false);




    const handleChange = (e: any) => {
        setOtp(e);
        // console.log(e);
    };
    const validOtp = (e: any) => {
        e.preventDefault();
        if (otp.length < 4) {
            // console.log("kkkkk");
            seterror(true);
            setIsClicked(!isClicked);

            setOtpColor(true);
        } else {
            seterror(false);
        }
    };
    return (
        <>
            <header className="p-6">
                <Image
                    src={back}
                    alt=""
                    onClick={() => {
                        Router.push("/login");
                    }}
                />
            </header>
            <hr />
            <div className="flex lg:items-center md:items-center flex-col lg:p-6 sm:p-[0.5rem] bg-gray-50 dark:bg-gray-900 bg-slate-50 p-[0.5rem]">
                <div className="flex flex-col justify-center md:w-[70%]">
                    <h1 className="justify-center text-3xl text-bolt py-4 md:text-center">
                        Login Confirmation
                    </h1>
                    <p className="text-center py-2 text-neutral-500 ">
                        We already send you confirmation code to your number +1238 392 ****
                        to login to your account.
                    </p>
                    <form className="w-full otp_input_form">
                        <OtpInput
                            value={otp}
                            containerStyle="justify-center gap-4"
                            onChange={handleChange}
                            numInputs={4}
                            separator={<span></span>}
                            inputStyle={
                                otp
                                    ? {
                                        border: "1px solid green",
                                        borderRadius: "7px",
                                        width: "3.5rem",
                                        height: "4rem",
                                    }
                                    : {
                                        // border: "1px solid #D0D5DD",
                                        border: "1px solid grey",
                                        borderRadius: "7px",
                                        width: "3.5rem",
                                        height: "4rem",
                                    }
                            }
                            className={isClicked ? 'clicked my-3 lg:px-3  py-6 input_otp <sm:mx-1></sm:mx-1> lg:mx-3 md:!mx-3 ' : 'my-3 lg:px-3  py-6 input_otp <sm:mx-1></sm:mx-1> lg:mx-3 md:!mx-3 '}
                            isInputNum
                            hasErrored
                            errorStyle={"errorstyle_otp"}
                            shouldAutoFocus
                        />
                        {error && (
                            <p className="text-[#D92D20] text-center py-4 sm:text-sm md:text-xl lg:text-2xl ">
                                Pin incorrect, you have been suspended.
                            </p>
                        )}
                        <Button
                            className={`!shadow-[0px_1px_2px_rgb(16_24_40_/_5%)] !w-full !tracking-[-0.011em] !font-medium text-base leading-6 px-3 py-2.5 rounded-lg`}
                            onClick={validOtp}
                            type="submit"
                            style={
                                otp.length == 4
                                    ? {
                                        backgroundColor: "#BAFB2E", color: "#1A1A1A"
                                    }
                                    : {
                                        backgroundColor: "#D0D5DD", color: "#FFFFFF"
                                    }
                            }
                        >
                            Continue
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default OTP;