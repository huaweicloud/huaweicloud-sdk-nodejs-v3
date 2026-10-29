
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCodeGateResponse extends SdkResponse {
    public result?: string;
    public httpStatus?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateCodeGateResponse {
        this['result'] = result;
        return this;
    }
    public withHttpStatus(httpStatus: string): UpdateCodeGateResponse {
        this['httpStatus'] = httpStatus;
        return this;
    }
    public withStatus(status: string): UpdateCodeGateResponse {
        this['status'] = status;
        return this;
    }
}