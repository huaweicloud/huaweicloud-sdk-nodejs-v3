import { BackupForList } from './BackupForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupsResponse extends SdkResponse {
    public backups?: Array<BackupForList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<BackupForList>): ListBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: number): ListBackupsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}