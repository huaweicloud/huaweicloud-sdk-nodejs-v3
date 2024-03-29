

export class ReplicationRecordsExtraInfo {
    public progress?: number;
    private 'fail_code'?: string;
    private 'fail_reason'?: string;
    private 'auto_trigger'?: boolean;
    private 'destinatio_vault_id'?: string;
    public constructor() { 
    }
    public withProgress(progress: number): ReplicationRecordsExtraInfo {
        this['progress'] = progress;
        return this;
    }
    public withFailCode(failCode: string): ReplicationRecordsExtraInfo {
        this['fail_code'] = failCode;
        return this;
    }
    public set failCode(failCode: string  | undefined) {
        this['fail_code'] = failCode;
    }
    public get failCode(): string | undefined {
        return this['fail_code'];
    }
    public withFailReason(failReason: string): ReplicationRecordsExtraInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withAutoTrigger(autoTrigger: boolean): ReplicationRecordsExtraInfo {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean  | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger(): boolean | undefined {
        return this['auto_trigger'];
    }
    public withDestinatioVaultId(destinatioVaultId: string): ReplicationRecordsExtraInfo {
        this['destinatio_vault_id'] = destinatioVaultId;
        return this;
    }
    public set destinatioVaultId(destinatioVaultId: string  | undefined) {
        this['destinatio_vault_id'] = destinatioVaultId;
    }
    public get destinatioVaultId(): string | undefined {
        return this['destinatio_vault_id'];
    }
}