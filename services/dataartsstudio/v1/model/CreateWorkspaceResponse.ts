import { CreateWorkspaceResultData } from './CreateWorkspaceResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkspaceResponse extends SdkResponse {
    public data?: CreateWorkspaceResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateWorkspaceResultData): CreateWorkspaceResponse {
        this['data'] = data;
        return this;
    }
}