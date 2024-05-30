import { CreateDirectoryResultData } from './CreateDirectoryResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDirectoryResponse extends SdkResponse {
    public data?: CreateDirectoryResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateDirectoryResultData): UpdateDirectoryResponse {
        this['data'] = data;
        return this;
    }
}