import { SearchSubjectResultData } from './SearchSubjectResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchSubjectResponse extends SdkResponse {
    public data?: SearchSubjectResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchSubjectResultData): SearchSubjectResponse {
        this['data'] = data;
        return this;
    }
}