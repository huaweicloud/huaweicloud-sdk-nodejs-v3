

export class RoleAuthority {
    public role?: string;
    private 'right_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withRole(role: string): RoleAuthority {
        this['role'] = role;
        return this;
    }
    public withRightList(rightList: Array<string>): RoleAuthority {
        this['right_list'] = rightList;
        return this;
    }
    public set rightList(rightList: Array<string> | undefined) {
        this['right_list'] = rightList;
    }
    public get rightList() {
        return this['right_list'];
    }
}