import { Backups } from './Backups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlBackupListResponse extends SdkResponse {
    public backups?: Array<Backups>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<Backups>): ShowGaussMySqlBackupListResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: number): ShowGaussMySqlBackupListResponse {
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