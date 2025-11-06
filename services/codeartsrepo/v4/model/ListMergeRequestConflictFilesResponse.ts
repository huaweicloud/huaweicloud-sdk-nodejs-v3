import { MRConflictFileDto } from './MRConflictFileDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestConflictFilesResponse extends SdkResponse {
    public body?: Array<MRConflictFileDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MRConflictFileDto>): ListMergeRequestConflictFilesResponse {
        this['body'] = body;
        return this;
    }
}