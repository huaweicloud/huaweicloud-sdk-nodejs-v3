
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHtapProcessListResponse extends SdkResponse {
    public status?: string;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteHtapProcessListResponse {
        this['status'] = status;
        return this;
    }
    public withMsg(msg: string): DeleteHtapProcessListResponse {
        this['msg'] = msg;
        return this;
    }
}