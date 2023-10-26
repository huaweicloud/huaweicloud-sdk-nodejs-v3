
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBucketResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): DeleteBucketResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): DeleteBucketResponse {
        this['status'] = status;
        return this;
    }
}