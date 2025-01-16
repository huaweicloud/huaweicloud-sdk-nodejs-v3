
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNotifyPolicyResponse extends SdkResponse {
    private 'request_id'?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateNotifyPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withId(id: string): CreateNotifyPolicyResponse {
        this['id'] = id;
        return this;
    }
}