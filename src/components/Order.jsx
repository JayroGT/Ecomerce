import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { order } from "../assets/data/data";



export const Order = () => {

  return (
    <div className="h-full">
        <div className="w-full px-24 py-4">
        <Stepper>
          {order.map((item,index)=>(
            <div key={index}>
              <Step>
              {item.id}
              <div className="absolute -bottom-[9rem] w-40 text-center">
                  <Typography
                  variant="h6"
                  color="gray"
                  >
                  {item.title}
                  </Typography>
                  <Typography
                  color="gray"
                  className="font-normal"
                  >
                  {item.desc}
                  </Typography>
              </div>
              </Step>
            </div>
          ))

          }
        </Stepper>
        </div>
    </div>
  )
}
