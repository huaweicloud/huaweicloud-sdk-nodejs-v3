

export class CloudConnectionIsSupportCapabilityValue {
    private 'is_support'?: boolean;
    public constructor(isSupport?: boolean) { 
        this['is_support'] = isSupport;
    }
    public withIsSupport(isSupport: boolean): CloudConnectionIsSupportCapabilityValue {
        this['is_support'] = isSupport;
        return this;
    }
    public set isSupport(isSupport: boolean  | undefined) {
        this['is_support'] = isSupport;
    }
    public get isSupport(): boolean | undefined {
        return this['is_support'];
    }
}