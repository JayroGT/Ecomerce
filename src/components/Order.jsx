import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";


export const Order = () => {

  return (
    <div className="mt-10 h-full">
        <div className="w-full px-24 py-4">
        <Stepper>
            <Step>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                variant="h6"
                color="gray"
                >
                Step 1
                </Typography>
                <Typography
                color="gray"
                className="font-normal"
                >
                Details about yout account.
                </Typography>
            </div>
            </Step>
            <Step>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                variant="h6"
                color="gray"
                >
                Step 2
                </Typography>
                <Typography
                color="gray"
                className="font-normal"
                >
                Details about yout account.
                </Typography>
            </div>
            </Step>
            <Step>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                variant="h6"
                color="gray"
                >
                Step 3
                </Typography>
                <Typography
                color="gray"
                className="font-normal"
                >
                Details about yout account.
                </Typography>
            </div>
            </Step>
            <Step>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                variant="h6"
                color="gray"
                >
                Step 3
                </Typography>
                <Typography
                color="gray"
                className="font-normal"
                >
                Details about yout account.
                </Typography>
            </div>
            </Step>
        </Stepper>
        </div>
    </div>
  )
}
