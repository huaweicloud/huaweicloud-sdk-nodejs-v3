import { BackupV3 } from './BackupV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceBackupsResponse extends SdkResponse {
    public backups?: Array<BackupV3>;
    private 'total_count'?: string;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<BackupV3>): ShowInstanceBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: string): ShowInstanceBackupsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
}