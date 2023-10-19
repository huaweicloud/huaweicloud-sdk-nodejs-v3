import { IncrementalBackups } from './IncrementalBackups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlIncrementalBackupListResponse extends SdkResponse {
    public backups?: Array<IncrementalBackups>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<IncrementalBackups>): ShowGaussMySqlIncrementalBackupListResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: number): ShowGaussMySqlIncrementalBackupListResponse {
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