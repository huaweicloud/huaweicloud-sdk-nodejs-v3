
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddBucketsResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): AddBucketsResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): AddBucketsResponse {
        this['status'] = status;
        return this;
    }
}