import { ListXelLogResponseResult } from './ListXelLogResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListXellogFilesResponse extends SdkResponse {
    public list?: Array<ListXelLogResponseResult>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<ListXelLogResponseResult>): ListXellogFilesResponse {
        this['list'] = list;
        return this;
    }
    public withCount(count: number): ListXellogFilesResponse {
        this['count'] = count;
        return this;
    }
}