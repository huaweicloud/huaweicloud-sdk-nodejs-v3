
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyBackupVaultLockResponse extends SdkResponse {
    public result?: ModifyBackupVaultLockResponseResultEnum | string;
    public constructor() { 
        super();
    }
    public withResult(result: ModifyBackupVaultLockResponseResultEnum | string): ModifyBackupVaultLockResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyBackupVaultLockResponseResultEnum {
    SUCCESS = 'success'
}
