
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDefaultTopicResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): UpdateDefaultTopicResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): UpdateDefaultTopicResponse {
        this['status'] = status;
        return this;
    }
}