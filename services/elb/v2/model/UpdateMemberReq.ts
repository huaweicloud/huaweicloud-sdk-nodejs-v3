

export class UpdateMemberReq {
    public name?: string;
    private 'admin_state_up'?: boolean;
    public weight?: number;
    public constructor() { 
    }
    public withName(name: string): UpdateMemberReq {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateMemberReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withWeight(weight: number): UpdateMemberReq {
        this['weight'] = weight;
        return this;
    }
}