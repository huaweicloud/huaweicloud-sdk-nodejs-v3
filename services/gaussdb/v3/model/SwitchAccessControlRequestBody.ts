

export class SwitchAccessControlRequestBody {
    private 'open_access_control'?: boolean;
    public constructor(openAccessControl?: boolean) { 
        this['open_access_control'] = openAccessControl;
    }
    public withOpenAccessControl(openAccessControl: boolean): SwitchAccessControlRequestBody {
        this['open_access_control'] = openAccessControl;
        return this;
    }
    public set openAccessControl(openAccessControl: boolean  | undefined) {
        this['open_access_control'] = openAccessControl;
    }
    public get openAccessControl(): boolean | undefined {
        return this['open_access_control'];
    }
}