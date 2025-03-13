

export class DlsAdmin {
    private 'manager_type'?: DlsAdminManagerTypeEnum | string;
    private 'manager_id'?: string;
    private 'manager_name'?: string;
    public constructor() { 
    }
    public withManagerType(managerType: DlsAdminManagerTypeEnum | string): DlsAdmin {
        this['manager_type'] = managerType;
        return this;
    }
    public set managerType(managerType: DlsAdminManagerTypeEnum | string  | undefined) {
        this['manager_type'] = managerType;
    }
    public get managerType(): DlsAdminManagerTypeEnum | string | undefined {
        return this['manager_type'];
    }
    public withManagerId(managerId: string): DlsAdmin {
        this['manager_id'] = managerId;
        return this;
    }
    public set managerId(managerId: string  | undefined) {
        this['manager_id'] = managerId;
    }
    public get managerId(): string | undefined {
        return this['manager_id'];
    }
    public withManagerName(managerName: string): DlsAdmin {
        this['manager_name'] = managerName;
        return this;
    }
    public set managerName(managerName: string  | undefined) {
        this['manager_name'] = managerName;
    }
    public get managerName(): string | undefined {
        return this['manager_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DlsAdminManagerTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}
