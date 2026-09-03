

export class UpdateSecurityPolicyControlReq {
    private 'enabled_instances'?: Array<string>;
    private 'enabled_tags'?: Array<string>;
    private 'disabled_instances'?: Array<string>;
    private 'disabled_tags'?: Array<string>;
    public constructor() { 
    }
    public withEnabledInstances(enabledInstances: Array<string>): UpdateSecurityPolicyControlReq {
        this['enabled_instances'] = enabledInstances;
        return this;
    }
    public set enabledInstances(enabledInstances: Array<string>  | undefined) {
        this['enabled_instances'] = enabledInstances;
    }
    public get enabledInstances(): Array<string> | undefined {
        return this['enabled_instances'];
    }
    public withEnabledTags(enabledTags: Array<string>): UpdateSecurityPolicyControlReq {
        this['enabled_tags'] = enabledTags;
        return this;
    }
    public set enabledTags(enabledTags: Array<string>  | undefined) {
        this['enabled_tags'] = enabledTags;
    }
    public get enabledTags(): Array<string> | undefined {
        return this['enabled_tags'];
    }
    public withDisabledInstances(disabledInstances: Array<string>): UpdateSecurityPolicyControlReq {
        this['disabled_instances'] = disabledInstances;
        return this;
    }
    public set disabledInstances(disabledInstances: Array<string>  | undefined) {
        this['disabled_instances'] = disabledInstances;
    }
    public get disabledInstances(): Array<string> | undefined {
        return this['disabled_instances'];
    }
    public withDisabledTags(disabledTags: Array<string>): UpdateSecurityPolicyControlReq {
        this['disabled_tags'] = disabledTags;
        return this;
    }
    public set disabledTags(disabledTags: Array<string>  | undefined) {
        this['disabled_tags'] = disabledTags;
    }
    public get disabledTags(): Array<string> | undefined {
        return this['disabled_tags'];
    }
}