

export class IpBlacklistImportDto {
    private 'add_type'?: number;
    private 'ip_blacklist'?: string;
    private 'effect_scope'?: Array<number>;
    public constructor() { 
    }
    public withAddType(addType: number): IpBlacklistImportDto {
        this['add_type'] = addType;
        return this;
    }
    public set addType(addType: number  | undefined) {
        this['add_type'] = addType;
    }
    public get addType(): number | undefined {
        return this['add_type'];
    }
    public withIpBlacklist(ipBlacklist: string): IpBlacklistImportDto {
        this['ip_blacklist'] = ipBlacklist;
        return this;
    }
    public set ipBlacklist(ipBlacklist: string  | undefined) {
        this['ip_blacklist'] = ipBlacklist;
    }
    public get ipBlacklist(): string | undefined {
        return this['ip_blacklist'];
    }
    public withEffectScope(effectScope: Array<number>): IpBlacklistImportDto {
        this['effect_scope'] = effectScope;
        return this;
    }
    public set effectScope(effectScope: Array<number>  | undefined) {
        this['effect_scope'] = effectScope;
    }
    public get effectScope(): Array<number> | undefined {
        return this['effect_scope'];
    }
}