
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKmsKeyResponse extends SdkResponse {
    private 'request_id'?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateKmsKeyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withId(id: string): UpdateKmsKeyResponse {
        this['id'] = id;
        return this;
    }
}