
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHkIdCardResponse extends SdkResponse {
    public result?: object;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeHkIdCardResponse {
        this['result'] = result;
        return this;
    }
}