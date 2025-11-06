import { BranchSimpleDto } from './BranchSimpleDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBranchesResponse extends SdkResponse {
    public body?: Array<BranchSimpleDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BranchSimpleDto>): ListBranchesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListBranchesResponse {
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