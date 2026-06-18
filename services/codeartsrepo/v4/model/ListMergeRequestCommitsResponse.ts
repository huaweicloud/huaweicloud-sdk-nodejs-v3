import { MergeRequestCommitDto } from './MergeRequestCommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestCommitsResponse extends SdkResponse {
    public body?: Array<MergeRequestCommitDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestCommitDto>): ListMergeRequestCommitsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListMergeRequestCommitsResponse {
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