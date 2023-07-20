import { BackupInfo } from './BackupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateManualBackupResponse extends SdkResponse {
    public backup?: BackupInfo;
    public constructor() { 
        super();
    }
    public withBackup(backup: BackupInfo): CreateManualBackupResponse {
        this['backup'] = backup;
        return this;
    }
}