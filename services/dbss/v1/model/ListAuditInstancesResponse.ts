import { AuditInstanceListBean } from './AuditInstanceListBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditInstancesResponse extends SdkResponse {
    public servers?: Array<AuditInstanceListBean>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<AuditInstanceListBean>): ListAuditInstancesResponse {
        this['servers'] = servers;
        return this;
    }
    public withTotal(total: number): ListAuditInstancesResponse {
        this['total'] = total;
        return this;
    }
}