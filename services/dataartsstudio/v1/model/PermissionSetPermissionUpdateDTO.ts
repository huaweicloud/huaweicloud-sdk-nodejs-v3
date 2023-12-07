

export class PermissionSetPermissionUpdateDTO {
    private 'dw_id'?: string;
    private 'permission_actions'?: Array<PermissionSetPermissionUpdateDTOPermissionActionsEnum> | Array<string>;
    public constructor() { 
    }
    public withDwId(dwId: string): PermissionSetPermissionUpdateDTO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withPermissionActions(permissionActions: Array<PermissionSetPermissionUpdateDTOPermissionActionsEnum> | Array<string>): PermissionSetPermissionUpdateDTO {
        this['permission_actions'] = permissionActions;
        return this;
    }
    public set permissionActions(permissionActions: Array<PermissionSetPermissionUpdateDTOPermissionActionsEnum> | Array<string>  | undefined) {
        this['permission_actions'] = permissionActions;
    }
    public get permissionActions(): Array<PermissionSetPermissionUpdateDTOPermissionActionsEnum> | Array<string> | undefined {
        return this['permission_actions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetPermissionUpdateDTOPermissionActionsEnum {
    ALL = 'ALL',
    SELECT = 'SELECT',
    UPDATE = 'UPDATE',
    CREATE = 'CREATE',
    DROP = 'DROP',
    ALTER = 'ALTER',
    INDEX = 'INDEX',
    LOCK = 'LOCK',
    READ = 'READ',
    WRITE = 'WRITE'
}
