import { OffSiteBackupForList } from './OffSiteBackupForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOffSiteBackupsResponse extends SdkResponse {
    public backups?: Array<OffSiteBackupForList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<OffSiteBackupForList>): ListOffSiteBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: number): ListOffSiteBackupsResponse {
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