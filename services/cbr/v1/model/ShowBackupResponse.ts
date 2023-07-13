import { BackupResp } from './BackupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupResponse extends SdkResponse {
    public backup?: BackupResp;
    public constructor() { 
        super();
    }
    public withBackup(backup: BackupResp): ShowBackupResponse {
        this['backup'] = backup;
        return this;
    }
}