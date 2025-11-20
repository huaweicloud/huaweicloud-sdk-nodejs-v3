import { BackupInfo } from './BackupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupsResponse extends SdkResponse {
    public total?: number;
    public offset?: number;
    public limit?: number;
    public backups?: Array<BackupInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBackupsResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ListBackupsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackupsResponse {
        this['limit'] = limit;
        return this;
    }
    public withBackups(backups: Array<BackupInfo>): ListBackupsResponse {
        this['backups'] = backups;
        return this;
    }
}