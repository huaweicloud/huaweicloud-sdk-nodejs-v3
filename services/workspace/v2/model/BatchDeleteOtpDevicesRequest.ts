import { DelOtpDevicesReq } from './DelOtpDevicesReq';


export class BatchDeleteOtpDevicesRequest {
    private 'user_id'?: string;
    public body?: DelOtpDevicesReq;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): BatchDeleteOtpDevicesRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: DelOtpDevicesReq): BatchDeleteOtpDevicesRequest {
        this['body'] = body;
        return this;
    }
}