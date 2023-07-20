import { OffsiteBackupInstance } from './OffsiteBackupInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOffSiteInstancesResponse extends SdkResponse {
    private 'offsite_backup_instances'?: Array<OffsiteBackupInstance>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOffsiteBackupInstances(offsiteBackupInstances: Array<OffsiteBackupInstance>): ListOffSiteInstancesResponse {
        this['offsite_backup_instances'] = offsiteBackupInstances;
        return this;
    }
    public set offsiteBackupInstances(offsiteBackupInstances: Array<OffsiteBackupInstance>  | undefined) {
        this['offsite_backup_instances'] = offsiteBackupInstances;
    }
    public get offsiteBackupInstances(): Array<OffsiteBackupInstance> | undefined {
        return this['offsite_backup_instances'];
    }
    public withTotalCount(totalCount: number): ListOffSiteInstancesResponse {
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