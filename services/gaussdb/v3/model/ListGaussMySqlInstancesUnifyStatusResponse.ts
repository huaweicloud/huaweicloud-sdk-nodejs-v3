import { MysqlInstanceListInfoUnifyStatus } from './MysqlInstanceListInfoUnifyStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlInstancesUnifyStatusResponse extends SdkResponse {
    public instances?: Array<MysqlInstanceListInfoUnifyStatus>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<MysqlInstanceListInfoUnifyStatus>): ListGaussMySqlInstancesUnifyStatusResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListGaussMySqlInstancesUnifyStatusResponse {
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