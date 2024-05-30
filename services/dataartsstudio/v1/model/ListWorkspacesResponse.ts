import { ListWorkspacesResultData } from './ListWorkspacesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspacesResponse extends SdkResponse {
    public data?: ListWorkspacesResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListWorkspacesResultData): ListWorkspacesResponse {
        this['data'] = data;
        return this;
    }
}