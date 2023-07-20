import { BackupsResult } from './BackupsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbBackupsResponse extends SdkResponse {
    public backups?: Array<BackupsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<BackupsResult>): ListDbBackupsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: number): ListDbBackupsResponse {
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