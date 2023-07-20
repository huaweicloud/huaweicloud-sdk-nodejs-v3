import { BackupInfo } from './BackupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateManualBackupResponse extends SdkResponse {
    public backup?: BackupInfo;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withBackup(backup: BackupInfo): CreateManualBackupResponse {
        this['backup'] = backup;
        return this;
    }
    public withJobId(jobId: string): CreateManualBackupResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}