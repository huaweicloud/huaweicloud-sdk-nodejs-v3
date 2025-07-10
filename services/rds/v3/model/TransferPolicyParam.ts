

export class TransferPolicyParam {
    public prefix?: string;
    public destination?: string;
    public period?: string;
    private 'backup_type'?: TransferPolicyParamBackupTypeEnum | string;
    public constructor(destination?: string, period?: string, backupType?: string) { 
        this['destination'] = destination;
        this['period'] = period;
        this['backup_type'] = backupType;
    }
    public withPrefix(prefix: string): TransferPolicyParam {
        this['prefix'] = prefix;
        return this;
    }
    public withDestination(destination: string): TransferPolicyParam {
        this['destination'] = destination;
        return this;
    }
    public withPeriod(period: string): TransferPolicyParam {
        this['period'] = period;
        return this;
    }
    public withBackupType(backupType: TransferPolicyParamBackupTypeEnum | string): TransferPolicyParam {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: TransferPolicyParamBackupTypeEnum | string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): TransferPolicyParamBackupTypeEnum | string | undefined {
        return this['backup_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransferPolicyParamBackupTypeEnum {
    DB = 'db',
    LOG = 'log'
}
