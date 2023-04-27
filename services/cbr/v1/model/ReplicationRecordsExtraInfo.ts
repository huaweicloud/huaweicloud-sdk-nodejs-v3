

export class ReplicationRecordsExtraInfo {
    public progress?: number;
    private 'fail_code'?: string | undefined;
    private 'fail_reason'?: string | undefined;
    private 'auto_trigger'?: boolean | undefined;
    private 'destinatio_vault_id'?: string | undefined;
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
    public set failCode(failCode: string | undefined) {
        this['fail_code'] = failCode;
    }
    public get failCode() {
        return this['fail_code'];
    }
    public withFailReason(failReason: string): ReplicationRecordsExtraInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
        return this['fail_reason'];
    }
    public withAutoTrigger(autoTrigger: boolean): ReplicationRecordsExtraInfo {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger() {
        return this['auto_trigger'];
    }
    public withDestinatioVaultId(destinatioVaultId: string): ReplicationRecordsExtraInfo {
        this['destinatio_vault_id'] = destinatioVaultId;
        return this;
    }
    public set destinatioVaultId(destinatioVaultId: string | undefined) {
        this['destinatio_vault_id'] = destinatioVaultId;
    }
    public get destinatioVaultId() {
        return this['destinatio_vault_id'];
    }
}