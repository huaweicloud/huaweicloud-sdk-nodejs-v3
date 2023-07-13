

export class SyncParam {
    private 'auto_trigger': boolean | undefined;
    private 'vault_id': string | undefined;
    public constructor(autoTrigger?: any, vaultId?: any) { 
        this['auto_trigger'] = autoTrigger;
        this['vault_id'] = vaultId;
    }
    public withAutoTrigger(autoTrigger: boolean): SyncParam {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger() {
        return this['auto_trigger'];
    }
    public withVaultId(vaultId: string): SyncParam {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
}