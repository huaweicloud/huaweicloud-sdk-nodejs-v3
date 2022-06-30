
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMainlandTravelPermitResponse extends SdkResponse {
    public result?: object;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeMainlandTravelPermitResponse {
        this['result'] = result;
        return this;
    }
}