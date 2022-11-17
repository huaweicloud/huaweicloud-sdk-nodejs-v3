import { IdDocumentItem } from './IdDocumentItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeIdDocumentResponse extends SdkResponse {
    public result?: IdDocumentItem;
    public constructor() { 
        super();
    }
    public withResult(result: IdDocumentItem): RecognizeIdDocumentResponse {
        this['result'] = result;
        return this;
    }
}