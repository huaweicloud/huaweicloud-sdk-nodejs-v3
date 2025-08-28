
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTuningResponse extends SdkResponse {
    private 'message_id'?: Array<string>;
    public status?: boolean;
    private 'quota_exceeded'?: boolean;
    public constructor() { 
        super();
    }
    public withMessageId(messageId: Array<string>): CreateTuningResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: Array<string>  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): Array<string> | undefined {
        return this['message_id'];
    }
    public withStatus(status: boolean): CreateTuningResponse {
        this['status'] = status;
        return this;
    }
    public withQuotaExceeded(quotaExceeded: boolean): CreateTuningResponse {
        this['quota_exceeded'] = quotaExceeded;
        return this;
    }
    public set quotaExceeded(quotaExceeded: boolean  | undefined) {
        this['quota_exceeded'] = quotaExceeded;
    }
    public get quotaExceeded(): boolean | undefined {
        return this['quota_exceeded'];
    }
}