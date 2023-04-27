import { BackupReplicateRespBody } from './BackupReplicateRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyBackupResponse extends SdkResponse {
    public replication?: BackupReplicateRespBody;
    public constructor() { 
        super();
    }
    public withReplication(replication: BackupReplicateRespBody): CopyBackupResponse {
        this['replication'] = replication;
        return this;
    }
}