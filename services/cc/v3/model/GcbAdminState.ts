

export class GcbAdminState {
    private 'admin_state'?: GcbAdminStateAdminStateEnum | string;
    public constructor() { 
    }
    public withAdminState(adminState: GcbAdminStateAdminStateEnum | string): GcbAdminState {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: GcbAdminStateAdminStateEnum | string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): GcbAdminStateAdminStateEnum | string | undefined {
        return this['admin_state'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GcbAdminStateAdminStateEnum {
    NORMAL = 'NORMAL',
    FREEZED = 'FREEZED'
}
