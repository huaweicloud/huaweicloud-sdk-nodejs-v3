

export class ChangeAutoKillVirusStatusRequestInfo {
    public enabled?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): ChangeAutoKillVirusStatusRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
}