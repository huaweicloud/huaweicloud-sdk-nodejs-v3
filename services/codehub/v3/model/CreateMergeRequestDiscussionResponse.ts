import { MergeRequestDiscussionDto } from './MergeRequestDiscussionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMergeRequestDiscussionResponse extends SdkResponse {
    public error?: Error;
    public result?: MergeRequestDiscussionDto;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateMergeRequestDiscussionResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: MergeRequestDiscussionDto): CreateMergeRequestDiscussionResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateMergeRequestDiscussionResponse {
        this['status'] = status;
        return this;
    }
}