import { ShareBackups } from './ShareBackups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShareBackupsResponse extends SdkResponse {
    public backups?: Array<ShareBackups>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<ShareBackups>): ListShareBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotal(total: number): ListShareBackupsResponse {
        this['total'] = total;
        return this;
    }
}