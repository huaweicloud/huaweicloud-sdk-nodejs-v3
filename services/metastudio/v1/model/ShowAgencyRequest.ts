

export class ShowAgencyRequest {
    private 'role_type'?: ShowAgencyRequestRoleTypeEnum | string;
    public constructor() { 
    }
    public withRoleType(roleType: ShowAgencyRequestRoleTypeEnum | string): ShowAgencyRequest {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: ShowAgencyRequestRoleTypeEnum | string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): ShowAgencyRequestRoleTypeEnum | string | undefined {
        return this['role_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAgencyRequestRoleTypeEnum {
    CBS = 'CBS',
    SIS = 'SIS'
}
