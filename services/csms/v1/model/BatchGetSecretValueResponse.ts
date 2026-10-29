import { Version } from './Version';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchGetSecretValueResponse extends SdkResponse {
    private 'total_count'?: number;
    public versions?: Array<Version>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): BatchGetSecretValueResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withVersions(versions: Array<Version>): BatchGetSecretValueResponse {
        this['versions'] = versions;
        return this;
    }
}