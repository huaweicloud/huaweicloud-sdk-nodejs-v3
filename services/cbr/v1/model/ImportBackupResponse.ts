import { BackupSyncRespBody } from './BackupSyncRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportBackupResponse extends SdkResponse {
    public sync?: Array<BackupSyncRespBody>;
    public constructor() { 
        super();
    }
    public withSync(sync: Array<BackupSyncRespBody>): ImportBackupResponse {
        this['sync'] = sync;
        return this;
    }
}