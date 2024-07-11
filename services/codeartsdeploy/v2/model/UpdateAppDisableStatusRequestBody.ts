

export class UpdateAppDisableStatusRequestBody {
    private 'is_disable'?: boolean;
    public constructor(isDisable?: boolean) { 
        this['is_disable'] = isDisable;
    }
    public withIsDisable(isDisable: boolean): UpdateAppDisableStatusRequestBody {
        this['is_disable'] = isDisable;
        return this;
    }
    public set isDisable(isDisable: boolean  | undefined) {
        this['is_disable'] = isDisable;
    }
    public get isDisable(): boolean | undefined {
        return this['is_disable'];
    }
}