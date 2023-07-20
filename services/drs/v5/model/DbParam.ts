

export class DbParam {
    public key?: string;
    private 'target_value'?: string;
    public constructor(key?: string, targetValue?: string) { 
        this['key'] = key;
        this['target_value'] = targetValue;
    }
    public withKey(key: string): DbParam {
        this['key'] = key;
        return this;
    }
    public withTargetValue(targetValue: string): DbParam {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
}