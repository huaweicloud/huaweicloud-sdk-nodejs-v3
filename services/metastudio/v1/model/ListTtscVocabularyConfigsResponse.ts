import { VocabularyConfig } from './VocabularyConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTtscVocabularyConfigsResponse extends SdkResponse {
    public count?: number;
    public data?: Array<VocabularyConfig>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTtscVocabularyConfigsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<VocabularyConfig>): ListTtscVocabularyConfigsResponse {
        this['data'] = data;
        return this;
    }
}