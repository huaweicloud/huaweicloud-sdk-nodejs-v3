
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeDbTemplateOperationResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): ChangeDbTemplateOperationResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): ChangeDbTemplateOperationResponse {
        this['status'] = status;
        return this;
    }
}