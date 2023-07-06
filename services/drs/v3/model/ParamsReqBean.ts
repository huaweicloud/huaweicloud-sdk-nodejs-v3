

export class ParamsReqBean {
    public key: string;
    private 'target_value': string | undefined;
    public constructor(key?: any, targetValue?: any) { 
        this['key'] = key;
        this['target_value'] = targetValue;
    }
    public withKey(key: string): ParamsReqBean {
        this['key'] = key;
        return this;
    }
    public withTargetValue(targetValue: string): ParamsReqBean {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue() {
        return this['target_value'];
    }
}