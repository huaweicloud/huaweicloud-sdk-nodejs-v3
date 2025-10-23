import { ItemCommitDto } from './ItemCommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListItemCommitsResponse extends SdkResponse {
    public body?: Array<ItemCommitDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ItemCommitDto>): ListItemCommitsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListItemCommitsResponse {
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