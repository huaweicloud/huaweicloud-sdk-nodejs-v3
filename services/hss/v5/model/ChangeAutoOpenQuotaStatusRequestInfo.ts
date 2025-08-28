

export class ChangeAutoOpenQuotaStatusRequestInfo {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): ChangeAutoOpenQuotaStatusRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
}