

export class SwitchExceptionSnapshotStatusRequestBody {
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): SwitchExceptionSnapshotStatusRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}