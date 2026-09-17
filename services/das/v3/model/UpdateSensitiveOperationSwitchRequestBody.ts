

export class UpdateSensitiveOperationSwitchRequestBody {
    private 'is_open'?: boolean;
    public constructor(isOpen?: boolean) { 
        this['is_open'] = isOpen;
    }
    public withIsOpen(isOpen: boolean): UpdateSensitiveOperationSwitchRequestBody {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
}