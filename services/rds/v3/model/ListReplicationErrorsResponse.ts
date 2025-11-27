import { ListReplicationErrorsResult } from './ListReplicationErrorsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReplicationErrorsResponse extends SdkResponse {
    public errors?: Array<ListReplicationErrorsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withErrors(errors: Array<ListReplicationErrorsResult>): ListReplicationErrorsResponse {
        this['errors'] = errors;
        return this;
    }
    public withTotalCount(totalCount: number): ListReplicationErrorsResponse {
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