import { BackupVaultLockRequest } from './BackupVaultLockRequest';


export class ModifyBackupVaultLockRequest {
    private 'X-Language'?: ModifyBackupVaultLockRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: BackupVaultLockRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ModifyBackupVaultLockRequestXLanguageEnum | string): ModifyBackupVaultLockRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyBackupVaultLockRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyBackupVaultLockRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifyBackupVaultLockRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BackupVaultLockRequest): ModifyBackupVaultLockRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyBackupVaultLockRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
