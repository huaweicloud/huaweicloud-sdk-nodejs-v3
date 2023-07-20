import { DBSInstanceHostInfoResult } from './DBSInstanceHostInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMsdtcHostsResponse extends SdkResponse {
    private 'total_count'?: number;
    public hosts?: Array<DBSInstanceHostInfoResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListMsdtcHostsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHosts(hosts: Array<DBSInstanceHostInfoResult>): ListMsdtcHostsResponse {
        this['hosts'] = hosts;
        return this;
    }
}