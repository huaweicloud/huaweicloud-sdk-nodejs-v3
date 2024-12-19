import { ListBackupsResult } from './ListBackupsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupsDetailsResponse extends SdkResponse {
    public backups?: Array<ListBackupsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBackups(backups: Array<ListBackupsResult>): ListBackupsDetailsResponse {
        this['backups'] = backups;
        return this;
    }
    public withTotalCount(totalCount: number): ListBackupsDetailsResponse {
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