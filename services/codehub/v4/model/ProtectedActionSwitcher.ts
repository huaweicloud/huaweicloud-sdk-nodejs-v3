

export class ProtectedActionSwitcher {
    public name?: ProtectedActionSwitcherNameEnum | string;
    public enable?: boolean;
    public constructor() { 
    }
    public withName(name: ProtectedActionSwitcherNameEnum | string): ProtectedActionSwitcher {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): ProtectedActionSwitcher {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProtectedActionSwitcherNameEnum {
    ALLOWED_FORCE_PUSH = 'allowed_force_push'
}
