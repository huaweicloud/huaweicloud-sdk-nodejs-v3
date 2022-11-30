import { VocabInfo } from './VocabInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVocabulariesResponse extends SdkResponse {
    public count?: number;
    public result?: Array<VocabInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowVocabulariesResponse {
        this['count'] = count;
        return this;
    }
    public withResult(result: Array<VocabInfo>): ShowVocabulariesResponse {
        this['result'] = result;
        return this;
    }
}