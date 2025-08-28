
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetUserPasswordResponse extends SdkResponse {
    public success?: boolean;
    private 'instance_id'?: string;
    private 'user_name'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ResetUserPasswordResponse {
        this['success'] = success;
        return this;
    }
    public withInstanceId(instanceId: string): ResetUserPasswordResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): ResetUserPasswordResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}