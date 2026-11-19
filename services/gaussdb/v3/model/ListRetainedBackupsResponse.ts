import { RetainedBackupInfo } from './RetainedBackupInfo';
import { RetainedBackupPolicy } from './RetainedBackupPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRetainedBackupsResponse extends SdkResponse {
    private 'recycle_backup_infos'?: Array<RetainedBackupInfo>;
    public policy?: RetainedBackupPolicy;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRecycleBackupInfos(recycleBackupInfos: Array<RetainedBackupInfo>): ListRetainedBackupsResponse {
        this['recycle_backup_infos'] = recycleBackupInfos;
        return this;
    }
    public set recycleBackupInfos(recycleBackupInfos: Array<RetainedBackupInfo>  | undefined) {
        this['recycle_backup_infos'] = recycleBackupInfos;
    }
    public get recycleBackupInfos(): Array<RetainedBackupInfo> | undefined {
        return this['recycle_backup_infos'];
    }
    public withPolicy(policy: RetainedBackupPolicy): ListRetainedBackupsResponse {
        this['policy'] = policy;
        return this;
    }
    public withTotal(total: number): ListRetainedBackupsResponse {
        this['total'] = total;
        return this;
    }
}