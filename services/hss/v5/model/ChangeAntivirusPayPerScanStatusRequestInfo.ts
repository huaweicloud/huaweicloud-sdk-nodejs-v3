

export class ChangeAntivirusPayPerScanStatusRequestInfo {
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): ChangeAntivirusPayPerScanStatusRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
}