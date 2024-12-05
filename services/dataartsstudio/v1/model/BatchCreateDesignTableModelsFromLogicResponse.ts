import { CreateWorkspaceResultData } from './CreateWorkspaceResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateDesignTableModelsFromLogicResponse extends SdkResponse {
    public data?: CreateWorkspaceResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateWorkspaceResultData): BatchCreateDesignTableModelsFromLogicResponse {
        this['data'] = data;
        return this;
    }
}