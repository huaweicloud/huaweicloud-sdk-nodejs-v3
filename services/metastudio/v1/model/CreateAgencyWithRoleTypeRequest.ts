

export class CreateAgencyWithRoleTypeRequest {
    private 'role_type'?: CreateAgencyWithRoleTypeRequestRoleTypeEnum | string;
    public constructor(roleType?: string) { 
        this['role_type'] = roleType;
    }
    public withRoleType(roleType: CreateAgencyWithRoleTypeRequestRoleTypeEnum | string): CreateAgencyWithRoleTypeRequest {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: CreateAgencyWithRoleTypeRequestRoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): CreateAgencyWithRoleTypeRequestRoleTypeEnum | string | undefined {
        return this['role_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAgencyWithRoleTypeRequestRoleTypeEnum {
    CBS = 'CBS',
    SIS = 'SIS'
}
