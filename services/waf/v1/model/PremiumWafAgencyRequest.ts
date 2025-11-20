

export class PremiumWafAgencyRequest {
    private 'role_name_list'?: Array<string>;
    public constructor() { 
    }
    public withRoleNameList(roleNameList: Array<string>): PremiumWafAgencyRequest {
        this['role_name_list'] = roleNameList;
        return this;
    }
    public set roleNameList(roleNameList: Array<string>  | undefined) {
        this['role_name_list'] = roleNameList;
    }
    public get roleNameList(): Array<string> | undefined {
        return this['role_name_list'];
    }
}