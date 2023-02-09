

export class BatchCopyConfigs {
    private 'target_domain': string | undefined;
    private 'source_domain': string | undefined;
    private 'config_list': Array<string> | undefined;
    public constructor(targetDomain?: any, sourceDomain?: any, configList?: any) { 
        this['target_domain'] = targetDomain;
        this['source_domain'] = sourceDomain;
        this['config_list'] = configList;
    }
    public withTargetDomain(targetDomain: string): BatchCopyConfigs {
        this['target_domain'] = targetDomain;
        return this;
    }
    public set targetDomain(targetDomain: string | undefined) {
        this['target_domain'] = targetDomain;
    }
    public get targetDomain() {
        return this['target_domain'];
    }
    public withSourceDomain(sourceDomain: string): BatchCopyConfigs {
        this['source_domain'] = sourceDomain;
        return this;
    }
    public set sourceDomain(sourceDomain: string | undefined) {
        this['source_domain'] = sourceDomain;
    }
    public get sourceDomain() {
        return this['source_domain'];
    }
    public withConfigList(configList: Array<string>): BatchCopyConfigs {
        this['config_list'] = configList;
        return this;
    }
    public set configList(configList: Array<string> | undefined) {
        this['config_list'] = configList;
    }
    public get configList() {
        return this['config_list'];
    }
}