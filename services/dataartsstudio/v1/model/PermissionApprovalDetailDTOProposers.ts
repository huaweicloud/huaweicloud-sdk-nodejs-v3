

export class PermissionApprovalDetailDTOProposers {
    public id?: string;
    public name?: string;
    public type?: PermissionApprovalDetailDTOProposersTypeEnum | string;
    public constructor() { 
    }
    public withId(id: string): PermissionApprovalDetailDTOProposers {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PermissionApprovalDetailDTOProposers {
        this['name'] = name;
        return this;
    }
    public withType(type: PermissionApprovalDetailDTOProposersTypeEnum | string): PermissionApprovalDetailDTOProposers {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionApprovalDetailDTOProposersTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    ROLE = 'ROLE',
    WORKSPACE_ACCOUNT = 'WORKSPACE_ACCOUNT'
}
