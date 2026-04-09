

export class ReadOnlySwitchReq {
    public readonly?: boolean;
    public constructor(readonly?: boolean) { 
        this['readonly'] = readonly;
    }
    public withReadonly(readonly: boolean): ReadOnlySwitchReq {
        this['readonly'] = readonly;
        return this;
    }
}