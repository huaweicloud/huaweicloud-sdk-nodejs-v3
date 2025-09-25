

export class AddCicdConfigurationRequestBody {
    private 'cicd_name'?: string;
    private 'vulnerability_whitelist'?: Array<string>;
    private 'vulnerability_blocklist'?: Array<string>;
    private 'image_whitelist'?: Array<string>;
    public constructor(cicdName?: string) { 
        this['cicd_name'] = cicdName;
    }
    public withCicdName(cicdName: string): AddCicdConfigurationRequestBody {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withVulnerabilityWhitelist(vulnerabilityWhitelist: Array<string>): AddCicdConfigurationRequestBody {
        this['vulnerability_whitelist'] = vulnerabilityWhitelist;
        return this;
    }
    public set vulnerabilityWhitelist(vulnerabilityWhitelist: Array<string>  | undefined) {
        this['vulnerability_whitelist'] = vulnerabilityWhitelist;
    }
    public get vulnerabilityWhitelist(): Array<string> | undefined {
        return this['vulnerability_whitelist'];
    }
    public withVulnerabilityBlocklist(vulnerabilityBlocklist: Array<string>): AddCicdConfigurationRequestBody {
        this['vulnerability_blocklist'] = vulnerabilityBlocklist;
        return this;
    }
    public set vulnerabilityBlocklist(vulnerabilityBlocklist: Array<string>  | undefined) {
        this['vulnerability_blocklist'] = vulnerabilityBlocklist;
    }
    public get vulnerabilityBlocklist(): Array<string> | undefined {
        return this['vulnerability_blocklist'];
    }
    public withImageWhitelist(imageWhitelist: Array<string>): AddCicdConfigurationRequestBody {
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