import React from "react";

export default function AppProgress() {
  return (
    <>
      <div className="bg-black">
          <div
            className="container flex flex-col
                       992:grid 992:grid-cols-2 gap-12
                       py-20 
                       "
          >
            <div className="">
              <img src="/images/progress.png" alt="" />
            </div>
            <div className="text-center space-y-3
                            992:text-left">
              <p className="sub-heading">APP PROGRESS</p>
              <h1 className="heading text-white">
                Set Up The Challenges and Track Your Progress
              </h1>
              <p className="p-gray text-white">
                Cloud based storage for your data backup just log in with your mail
                account from play store and using whatever you want for your
                business purpose orem ipsum dummy text. never missyour chance its
                just began. backup just log in with your mail account from. Most
                provabily best for your data backup just log in with your mail
                account from play store and using whatever you want for your
                business purpose orem ipsum dummy backup just log in with your mail
                account from.
              </p>
              <div><button className="btn mt-6">Start Free Trial</button></div>
            </div>
          </div>
      </div>
    </>
  );
}
