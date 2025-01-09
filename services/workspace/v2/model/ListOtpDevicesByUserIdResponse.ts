import { OtpDevice } from './OtpDevice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOtpDevicesByUserIdResponse extends SdkResponse {
    private 'otp_devices'?: Array<OtpDevice>;
    public constructor() { 
        super();
    }
    public withOtpDevices(otpDevices: Array<OtpDevice>): ListOtpDevicesByUserIdResponse {
        this['otp_devices'] = otpDevices;
        return this;
    }
    public set otpDevices(otpDevices: Array<OtpDevice>  | undefined) {
        this['otp_devices'] = otpDevices;
    }
    public get otpDevices(): Array<OtpDevice> | undefined {
        return this['otp_devices'];
    }
}