import { BackupResp } from './BackupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBackupResponse extends SdkResponse {
    public backup?: BackupResp;
    public constructor() { 
        super();
    }
    public withBackup(backup: BackupResp): UpdateBackupResponse {
        this['backup'] = backup;
        return this;
    }
}