

export class Taint {
    public effect?: TaintEffectEnum;
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withEffect(effect: TaintEffectEnum): Taint {
        this['effect'] = effect;
        return this;
    }
    public withKey(key: string): Taint {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Taint {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaintEffectEnum {
    NOSCHEDULE = 'NoSchedule',
    PREFERNOSCHEDULE = 'PreferNoSchedule',
    NOEXECUTE = 'NoExecute'
}
