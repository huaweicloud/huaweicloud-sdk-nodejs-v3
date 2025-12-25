

export class ConfigInfo {
    public accounts?: Array<string>;
    public action?: string;
    public alert?: boolean;
    private 'all_accounts'?: boolean;
    public csvc?: string;
    private 'csvc_display'?: string;
    public enable?: number;
    private 'new_account_auto_access'?: boolean;
    public shards?: number;
    private 'source_display'?: string;
    private 'source_id'?: number;
    private 'source_name'?: string;
    public ttl?: number;
    public constructor(csvcDisplay?: string, enable?: number, shards?: number, sourceDisplay?: string, sourceId?: number, ttl?: number) { 
        this['csvc_display'] = csvcDisplay;
        this['enable'] = enable;
        this['shards'] = shards;
        this['source_display'] = sourceDisplay;
        this['source_id'] = sourceId;
        this['ttl'] = ttl;
    }
    public withAccounts(accounts: Array<string>): ConfigInfo {
        this['accounts'] = accounts;
        return this;
    }
    public withAction(action: string): ConfigInfo {
        this['action'] = action;
        return this;
    }
    public withAlert(alert: boolean): ConfigInfo {
        this['alert'] = alert;
        return this;
    }
    public withAllAccounts(allAccounts: boolean): ConfigInfo {
        this['all_accounts'] = allAccounts;
        return this;
    }
    public set allAccounts(allAccounts: boolean  | undefined) {
        this['all_accounts'] = allAccounts;
    }
    public get allAccounts(): boolean | undefined {
        return this['all_accounts'];
    }
    public withCsvc(csvc: string): ConfigInfo {
        this['csvc'] = csvc;
        return this;
    }
    public withCsvcDisplay(csvcDisplay: string): ConfigInfo {
        this['csvc_display'] = csvcDisplay;
        return this;
    }
    public set csvcDisplay(csvcDisplay: string  | undefined) {
        this['csvc_display'] = csvcDisplay;
    }
    public get csvcDisplay(): string | undefined {
        return this['csvc_display'];
    }
    public withEnable(enable: number): ConfigInfo {
        this['enable'] = enable;
        return this;
    }
    public withNewAccountAutoAccess(newAccountAutoAccess: boolean): ConfigInfo {
        this['new_account_auto_access'] = newAccountAutoAccess;
        return this;
    }
    public set newAccountAutoAccess(newAccountAutoAccess: boolean  | undefined) {
        this['new_account_auto_access'] = newAccountAutoAccess;
    }
    public get newAccountAutoAccess(): boolean | undefined {
        return this['new_account_auto_access'];
    }
    public withShards(shards: number): ConfigInfo {
        this['shards'] = shards;
        return this;
    }
    public withSourceDisplay(sourceDisplay: string): ConfigInfo {
        this['source_display'] = sourceDisplay;
        return this;
    }
    public set sourceDisplay(sourceDisplay: string  | undefined) {
        this['source_display'] = sourceDisplay;
    }
    public get sourceDisplay(): string | undefined {
        return this['source_display'];
    }
    public withSourceId(sourceId: number): ConfigInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): ConfigInfo {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withTtl(ttl: number): ConfigInfo {
        this['ttl'] = ttl;
        return this;
    }
}