import { CreateWorkspaceResultData } from './CreateWorkspaceResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkspaceDetailByIdResponse extends SdkResponse {
    public data?: CreateWorkspaceResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateWorkspaceResultData): ShowWorkspaceDetailByIdResponse {
        this['data'] = data;
        return this;
    }
}