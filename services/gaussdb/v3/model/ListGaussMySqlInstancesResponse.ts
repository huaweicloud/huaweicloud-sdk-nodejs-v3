import { MysqlInstanceListInfo } from './MysqlInstanceListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlInstancesResponse extends SdkResponse {
    public instances?: Array<MysqlInstanceListInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<MysqlInstanceListInfo>): ListGaussMySqlInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListGaussMySqlInstancesResponse {
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