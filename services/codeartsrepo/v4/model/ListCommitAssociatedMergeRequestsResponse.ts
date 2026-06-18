import { CommitMergeRequestDto } from './CommitMergeRequestDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitAssociatedMergeRequestsResponse extends SdkResponse {
    public body?: Array<CommitMergeRequestDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CommitMergeRequestDto>): ListCommitAssociatedMergeRequestsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListCommitAssociatedMergeRequestsResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}