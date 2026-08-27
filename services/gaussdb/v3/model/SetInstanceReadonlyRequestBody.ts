

export class SetInstanceReadonlyRequestBody {
    public readonly?: boolean;
    public constructor(readonly?: boolean) { 
        this['readonly'] = readonly;
    }
    public withReadonly(readonly: boolean): SetInstanceReadonlyRequestBody {
        this['readonly'] = readonly;
        return this;
    }
}