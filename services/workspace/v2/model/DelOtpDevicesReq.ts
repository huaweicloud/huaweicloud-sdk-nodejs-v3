

export class DelOtpDevicesReq {
    private 'otp_ids'?: Array<string>;
    public constructor() { 
    }
    public withOtpIds(otpIds: Array<string>): DelOtpDevicesReq {
        this['otp_ids'] = otpIds;
        return this;
    }
    public set otpIds(otpIds: Array<string>  | undefined) {
        this['otp_ids'] = otpIds;
    }
    public get otpIds(): Array<string> | undefined {
        return this['otp_ids'];
    }
}