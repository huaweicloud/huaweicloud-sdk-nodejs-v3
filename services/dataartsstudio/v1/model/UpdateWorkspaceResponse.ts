import { CreateWorkspaceResultData } from './CreateWorkspaceResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkspaceResponse extends SdkResponse {
    public data?: CreateWorkspaceResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateWorkspaceResultData): UpdateWorkspaceResponse {
        this['data'] = data;
        return this;
    }
}