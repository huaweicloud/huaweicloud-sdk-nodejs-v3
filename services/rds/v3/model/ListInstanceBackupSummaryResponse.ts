import { InstanceBackupSummary } from './InstanceBackupSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceBackupSummaryResponse extends SdkResponse {
    public infos?: Array<InstanceBackupSummary>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfos(infos: Array<InstanceBackupSummary>): ListInstanceBackupSummaryResponse {
        this['infos'] = infos;
        return this;
    }
    public withTotal(total: number): ListInstanceBackupSummaryResponse {
        this['total'] = total;
        return this;
    }
}