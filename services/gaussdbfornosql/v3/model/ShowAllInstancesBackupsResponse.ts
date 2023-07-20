import { QueryInstanceBackupResponseBodyBackups } from './QueryInstanceBackupResponseBodyBackups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAllInstancesBackupsResponse extends SdkResponse {
    private 'total_count'?: number;
    public backups?: Array<QueryInstanceBackupResponseBodyBackups>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowAllInstancesBackupsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withBackups(backups: Array<QueryInstanceBackupResponseBodyBackups>): ShowAllInstancesBackupsResponse {
        this['backups'] = backups;
        return this;
    }
}