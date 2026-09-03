import { RetainBackup } from './RetainBackup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRetainBackupsResponse extends SdkResponse {
    public backups?: RetainBackup;
    public total?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: RetainBackup): ListRetainBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotal(total: number): ListRetainBackupsResponse {
        this['total'] = total;
        return this;
    }
}