import { ListSubjectLevelsResultData } from './ListSubjectLevelsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubjectLevelsResponse extends SdkResponse {
    public data?: ListSubjectLevelsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListSubjectLevelsResultData): ListSubjectLevelsResponse {
        this['data'] = data;
        return this;
    }
}