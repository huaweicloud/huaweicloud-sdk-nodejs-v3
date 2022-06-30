
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeExitEntryPermitResponse extends SdkResponse {
    public result?: object;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeExitEntryPermitResponse {
        this['result'] = result;
        return this;
    }
}