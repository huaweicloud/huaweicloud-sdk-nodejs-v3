import { RepositoryMemberDto } from './RepositoryMemberDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMembersResponse extends SdkResponse {
    public body?: Array<RepositoryMemberDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryMemberDto>): ListMembersResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListMembersResponse {
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