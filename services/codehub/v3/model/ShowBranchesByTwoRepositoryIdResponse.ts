import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBranchesByTwoRepositoryIdResponse extends SdkResponse {
    public error?: Error;
    public result?: TagList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowBranchesByTwoRepositoryIdResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: TagList): ShowBranchesByTwoRepositoryIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowBranchesByTwoRepositoryIdResponse {
        this['status'] = status;
        return this;
    }
}