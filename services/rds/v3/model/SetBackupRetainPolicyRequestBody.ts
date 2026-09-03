

export class SetBackupRetainPolicyRequestBody {
    public auto?: string;
    public manual?: string;
    public instanceids?: Array<string>;
    public constructor(auto?: string, manual?: string, instanceids?: Array<string>) { 
        this['auto'] = auto;
        this['manual'] = manual;
        this['instanceids'] = instanceids;
    }
    public withAuto(auto: string): SetBackupRetainPolicyRequestBody {
        this['auto'] = auto;
        return this;
    }
    public withManual(manual: string): SetBackupRetainPolicyRequestBody {
        this['manual'] = manual;
        return this;
    }
    public withInstanceids(instanceids: Array<string>): SetBackupRetainPolicyRequestBody {
        this['instanceids'] = instanceids;
        return this;
    }
}