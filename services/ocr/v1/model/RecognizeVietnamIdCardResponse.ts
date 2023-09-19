import { VietnamIdCardResult } from './VietnamIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeVietnamIdCardResponse extends SdkResponse {
    public result?: VietnamIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: VietnamIdCardResult): RecognizeVietnamIdCardResponse {
        this['result'] = result;
        return this;
    }
}