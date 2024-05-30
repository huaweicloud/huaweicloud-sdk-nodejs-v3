import { SearchSubjectNewResultData } from './SearchSubjectNewResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchSubjectNewResponse extends SdkResponse {
    public data?: SearchSubjectNewResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchSubjectNewResultData): SearchSubjectNewResponse {
        this['data'] = data;
        return this;
    }
}