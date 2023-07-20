

export class TableUserPermissionsRespPrivilege {
    private 'object'?: string;
    public privileges?: Array<string>;
    public constructor() { 
    }
    public withModelObject(modelObject: string): TableUserPermissionsRespPrivilege {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withPrivileges(privileges: Array<string>): TableUserPermissionsRespPrivilege {
        this['privileges'] = privileges;
        return this;
    }
}