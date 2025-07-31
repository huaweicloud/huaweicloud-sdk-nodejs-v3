import { TtscGroupAssetsConfig } from './TtscGroupAssetsConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTtscVocabularyGroupsResponse extends SdkResponse {
    public count?: number;
    public data?: Array<TtscGroupAssetsConfig>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTtscVocabularyGroupsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<TtscGroupAssetsConfig>): ListTtscVocabularyGroupsResponse {
        this['data'] = data;
        return this;
    }
}