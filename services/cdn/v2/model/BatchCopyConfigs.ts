

export class BatchCopyConfigs {
    private 'target_domain'?: string;
    private 'source_domain'?: string;
    private 'config_list'?: Array<string>;
    public constructor(targetDomain?: string, sourceDomain?: string, configList?: Array<string>) { 
        this['target_domain'] = targetDomain;
        this['source_domain'] = sourceDomain;
        this['config_list'] = configList;
    }
    public withTargetDomain(targetDomain: string): BatchCopyConfigs {
        this['target_domain'] = targetDomain;
        return this;
    }
    public set targetDomain(targetDomain: string  | undefined) {
        this['target_domain'] = targetDomain;
    }
    public get targetDomain(): string | undefined {
        return this['target_domain'];
    }
    public withSourceDomain(sourceDomain: string): BatchCopyConfigs {
        this['source_domain'] = sourceDomain;
        return this;
    }
    public set sourceDomain(sourceDomain: string  | undefined) {
        this['source_domain'] = sourceDomain;
    }
    public get sourceDomain(): string | undefined {
        return this['source_domain'];
    }
    public withConfigList(configList: Array<string>): BatchCopyConfigs {
        this['config_list'] = configList;
        return this;
    }
    public set configList(configList: Array<string>  | undefined) {
        this['config_list'] = configList;
    }
    public get configList(): Array<string> | undefined {
        return this['config_list'];
    }
}