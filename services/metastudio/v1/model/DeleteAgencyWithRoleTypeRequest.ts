

export class DeleteAgencyWithRoleTypeRequest {
    private 'role_type'?: DeleteAgencyWithRoleTypeRequestRoleTypeEnum | string;
    public constructor(roleType?: string) { 
        this['role_type'] = roleType;
    }
    public withRoleType(roleType: DeleteAgencyWithRoleTypeRequestRoleTypeEnum | string): DeleteAgencyWithRoleTypeRequest {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: DeleteAgencyWithRoleTypeRequestRoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): DeleteAgencyWithRoleTypeRequestRoleTypeEnum | string | undefined {
        return this['role_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteAgencyWithRoleTypeRequestRoleTypeEnum {
    CBS = 'CBS',
    SIS = 'SIS'
}
