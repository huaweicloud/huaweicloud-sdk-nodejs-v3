import { BackupResp } from './BackupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupsResponse extends SdkResponse {
    public backups?: Array<BackupResp>;
    public count?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<BackupResp>): ListBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withCount(count: number): ListBackupsResponse {
        this['count'] = count;
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
}