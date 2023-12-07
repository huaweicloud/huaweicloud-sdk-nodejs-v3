import { MysqlInstanceInfoDetailUnifyStatus } from './MysqlInstanceInfoDetailUnifyStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlInstanceInfoUnifyStatusResponse extends SdkResponse {
    public instance?: MysqlInstanceInfoDetailUnifyStatus;
    public constructor() { 
        super();
    }
    public withInstance(instance: MysqlInstanceInfoDetailUnifyStatus): ShowGaussMySqlInstanceInfoUnifyStatusResponse {
        this['instance'] = instance;
        return this;
    }
}