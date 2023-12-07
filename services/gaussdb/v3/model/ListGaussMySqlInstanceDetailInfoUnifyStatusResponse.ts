import { MysqlInstanceInfoDetailUnifyStatus } from './MysqlInstanceInfoDetailUnifyStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlInstanceDetailInfoUnifyStatusResponse extends SdkResponse {
    public instances?: Array<MysqlInstanceInfoDetailUnifyStatus>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<MysqlInstanceInfoDetailUnifyStatus>): ListGaussMySqlInstanceDetailInfoUnifyStatusResponse {
        this['instances'] = instances;
        return this;
    }
}