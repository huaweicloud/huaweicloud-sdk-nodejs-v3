
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeCambodianIdCardResponse extends SdkResponse {
    public result?: object;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeCambodianIdCardResponse {
        this['result'] = result;
        return this;
    }
}