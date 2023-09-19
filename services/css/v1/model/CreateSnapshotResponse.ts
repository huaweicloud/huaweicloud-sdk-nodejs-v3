import { BackupRsp } from './BackupRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSnapshotResponse extends SdkResponse {
    public backup?: BackupRsp;
    public constructor() { 
        super();
    }
    public withBackup(backup: BackupRsp): CreateSnapshotResponse {
        this['backup'] = backup;
        return this;
    }
}