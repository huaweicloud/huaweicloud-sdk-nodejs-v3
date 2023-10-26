import { DDosStatus } from './DDosStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDDosStatusResponse extends SdkResponse {
    public total?: number;
    public ddosStatus?: Array<DDosStatus>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDDosStatusResponse {
        this['total'] = total;
        return this;
    }
    public withDdosStatus(ddosStatus: Array<DDosStatus>): ListDDosStatusResponse {
        this['ddosStatus'] = ddosStatus;
        return this;
    }
}