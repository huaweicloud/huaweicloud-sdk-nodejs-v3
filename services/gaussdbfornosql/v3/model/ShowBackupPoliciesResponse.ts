import { ShowBackupPolicyResult } from './ShowBackupPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupPoliciesResponse extends SdkResponse {
    private 'backup_policy'?: ShowBackupPolicyResult;
    public constructor() { 
        super();
    }
    public withBackupPolicy(backupPolicy: ShowBackupPolicyResult): ShowBackupPoliciesResponse {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: ShowBackupPolicyResult  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): ShowBackupPolicyResult | undefined {
        return this['backup_policy'];
    }
}