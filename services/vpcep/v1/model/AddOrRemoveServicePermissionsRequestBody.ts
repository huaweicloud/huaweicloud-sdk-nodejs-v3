

export class AddOrRemoveServicePermissionsRequestBody {
    public permissions: Array<string>;
    public action: AddOrRemoveServicePermissionsRequestBodyActionEnum;
    public constructor(permissions?: any, action?: any) { 
        this['permissions'] = permissions;
        this['action'] = action;
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsRequestBody {
        this['permissions'] = permissions;
        return this;
    }
    public withAction(action: AddOrRemoveServicePermissionsRequestBodyActionEnum): AddOrRemoveServicePermissionsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddOrRemoveServicePermissionsRequestBodyActionEnum {
    ADD = 'add',
    REMOVE = 'remove'
}
