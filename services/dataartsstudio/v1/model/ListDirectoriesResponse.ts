import { ListDirectoriesResultData } from './ListDirectoriesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDirectoriesResponse extends SdkResponse {
    public data?: ListDirectoriesResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListDirectoriesResultData): ListDirectoriesResponse {
        this['data'] = data;
        return this;
    }
}