

export class PolicyContent {
    private 'enable_image_startup'?: boolean;
    private 'policy_type'?: string;
    public severity?: number;
    private 'risky_item'?: Array<string>;
    public action?: number;
    public constructor(enableImageStartup?: boolean, policyType?: string, severity?: number, riskyItem?: Array<string>, action?: number) { 
        this['enable_image_startup'] = enableImageStartup;
        this['policy_type'] = policyType;
        this['severity'] = severity;
        this['risky_item'] = riskyItem;
        this['action'] = action;
    }
    public withEnableImageStartup(enableImageStartup: boolean): PolicyContent {
        this['enable_image_startup'] = enableImageStartup;
        return this;
    }
    public set enableImageStartup(enableImageStartup: boolean  | undefined) {
        this['enable_image_startup'] = enableImageStartup;
    }
    public get enableImageStartup(): boolean | undefined {
        return this['enable_image_startup'];
    }
    public withPolicyType(policyType: string): PolicyContent {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
    public withSeverity(severity: number): PolicyContent {
        this['severity'] = severity;
        return this;
    }
    public withRiskyItem(riskyItem: Array<string>): PolicyContent {
        this['risky_item'] = riskyItem;
        return this;
    }
    public set riskyItem(riskyItem: Array<string>  | undefined) {
        this['risky_item'] = riskyItem;
    }
    public get riskyItem(): Array<string> | undefined {
        return this['risky_item'];
    }
    public withAction(action: number): PolicyContent {
        this['action'] = action;
        return this;
    }
}