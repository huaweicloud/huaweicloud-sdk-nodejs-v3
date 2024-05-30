import { CreateDirectoryResultData } from './CreateDirectoryResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDirectoryResponse extends SdkResponse {
    public data?: CreateDirectoryResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateDirectoryResultData): CreateDirectoryResponse {
        this['data'] = data;
        return this;
    }
}