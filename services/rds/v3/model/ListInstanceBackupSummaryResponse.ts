import { InstanceBackupSummary } from './InstanceBackupSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceBackupSummaryResponse extends SdkResponse {
    public infos?: Array<InstanceBackupSummary>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInfos(infos: Array<InstanceBackupSummary>): ListInstanceBackupSummaryResponse {
        this['infos'] = infos;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstanceBackupSummaryResponse {
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