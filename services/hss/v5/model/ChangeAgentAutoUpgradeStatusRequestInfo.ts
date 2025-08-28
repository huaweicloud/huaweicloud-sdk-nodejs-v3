

export class ChangeAgentAutoUpgradeStatusRequestInfo {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): ChangeAgentAutoUpgradeStatusRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
}