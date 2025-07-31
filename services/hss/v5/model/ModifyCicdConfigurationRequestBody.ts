

export class ModifyCicdConfigurationRequestBody {
    private 'vulnerability_whitelist'?: Array<string>;
    private 'vulnerability_blocklist'?: Array<string>;
    private 'image_whitelist'?: Array<string>;
    public constructor() { 
    }
    public withVulnerabilityWhitelist(vulnerabilityWhitelist: Array<string>): ModifyCicdConfigurationRequestBody {
        this['vulnerability_whitelist'] = vulnerabilityWhitelist;
        return this;
    }
    public set vulnerabilityWhitelist(vulnerabilityWhitelist: Array<string>  | undefined) {
        this['vulnerability_whitelist'] = vulnerabilityWhitelist;
    }
    public get vulnerabilityWhitelist(): Array<string> | undefined {
        return this['vulnerability_whitelist'];
    }
    public withVulnerabilityBlocklist(vulnerabilityBlocklist: Array<string>): ModifyCicdConfigurationRequestBody {
        this['vulnerability_blocklist'] = vulnerabilityBlocklist;
        return this;
    }
    public set vulnerabilityBlocklist(vulnerabilityBlocklist: Array<string>  | undefined) {
        this['vulnerability_blocklist'] = vulnerabilityBlocklist;
    }
    public get vulnerabilityBlocklist(): Array<string> | undefined {
        return this['vulnerability_blocklist'];
    }
    public withImageWhitelist(imageWhitelist: Array<string>): ModifyCicdConfigurationRequestBody {
        this['image_whitelist'] = imageWhitelist;
        return this;
    }
    public set imageWhitelist(imageWhitelist: Array<string>  | undefined) {
        this['image_whitelist'] = imageWhitelist;
    }
    public get imageWhitelist(): Array<string> | undefined {
        return this['image_whitelist'];
    }
}