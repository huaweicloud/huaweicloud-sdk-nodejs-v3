import { PassportResult } from './PassportResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizePassportResponse extends SdkResponse {
    public result?: PassportResult;
    public constructor() { 
        super();
    }
    public withResult(result: PassportResult): RecognizePassportResponse {
        this['result'] = result;
        return this;
    }
}