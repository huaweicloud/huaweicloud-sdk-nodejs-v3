import { Backup } from './Backup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupsResponse extends SdkResponse {
    private 'total_count'?: number;
    public backups?: Array<Backup>;
    public constructor() { 
        super();
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
    public withBackups(backups: Array<Backup>): ListBackupsResponse {
        this['backups'] = backups;
        return this;
    }
}