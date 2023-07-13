
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogtankResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public id?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateLogtankResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withId(id: string): CreateLogtankResponse {
        this['id'] = id;
        return this;
    }
}