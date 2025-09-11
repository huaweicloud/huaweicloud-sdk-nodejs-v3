import { AuditInstanceListBean } from './AuditInstanceListBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditInstancesNewResponse extends SdkResponse {
    public servers?: Array<AuditInstanceListBean>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<AuditInstanceListBean>): ListAuditInstancesNewResponse {
        this['servers'] = servers;
        return this;
    }
    public withTotal(total: number): ListAuditInstancesNewResponse {
        this['total'] = total;
        return this;
    }
}