import { Environment } from './Environment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentsResponse extends SdkResponse {
    public environments?: Array<Environment>;
    public offset?: number;
    public limit?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEnvironments(environments: Array<Environment>): ListEnvironmentsResponse {
        this['environments'] = environments;
        return this;
    }
    public withOffset(offset: number): ListEnvironmentsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnvironmentsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotalCount(totalCount: number): ListEnvironmentsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}