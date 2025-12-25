
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAdhocQueryResponse extends SdkResponse {
    public status?: number;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: number): DeleteAdhocQueryResponse {
        this['status'] = status;
        return this;
    }
    public withMsg(msg: string): DeleteAdhocQueryResponse {
        this['msg'] = msg;
        return this;
    }
}