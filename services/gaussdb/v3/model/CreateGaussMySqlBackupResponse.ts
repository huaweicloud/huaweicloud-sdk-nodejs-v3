import { Backup } from './Backup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGaussMySqlBackupResponse extends SdkResponse {
    public backup?: Backup;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withBackup(backup: Backup): CreateGaussMySqlBackupResponse {
        this['backup'] = backup;
        return this;
    }
    public withJobId(jobId: string): CreateGaussMySqlBackupResponse {
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