import { FailedAtlas } from './FailedAtlas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAtlasesResponse extends SdkResponse {
    public deleted?: Array<string>;
    public failed?: Array<FailedAtlas>;
    public constructor() { 
        super();
    }
    public withDeleted(deleted: Array<string>): BatchDeleteAtlasesResponse {
        this['deleted'] = deleted;
        return this;
    }
    public withFailed(failed: Array<FailedAtlas>): BatchDeleteAtlasesResponse {
        this['failed'] = failed;
        return this;
    }
}