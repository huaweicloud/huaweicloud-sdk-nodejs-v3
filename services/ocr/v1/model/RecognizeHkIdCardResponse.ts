import { HkIdCardResult } from './HkIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHkIdCardResponse extends SdkResponse {
    public result?: HkIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: HkIdCardResult): RecognizeHkIdCardResponse {
        this['result'] = result;
        return this;
    }
}