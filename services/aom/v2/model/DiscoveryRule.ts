

export class DiscoveryRule {
    public checkContent?: Array<string>;
    public checkMode?: string;
    public checkType?: string;
    public constructor(checkContent?: Array<string>, checkMode?: string, checkType?: string) { 
        this['checkContent'] = checkContent;
        this['checkMode'] = checkMode;
        this['checkType'] = checkType;
    }
    public withCheckContent(checkContent: Array<string>): DiscoveryRule {
        this['checkContent'] = checkContent;
        return this;
    }
    public withCheckMode(checkMode: string): DiscoveryRule {
        this['checkMode'] = checkMode;
        return this;
    }
    public withCheckType(checkType: string): DiscoveryRule {
        this['checkType'] = checkType;
        return this;
    }
}