import { MergeChangesTreesDto } from './MergeChangesTreesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeChangesTreesResponse extends SdkResponse {
    public error?: Error;
    public result?: MergeChangesTreesDto;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListMergeChangesTreesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: MergeChangesTreesDto): ListMergeChangesTreesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListMergeChangesTreesResponse {
        this['status'] = status;
        return this;
    }
}