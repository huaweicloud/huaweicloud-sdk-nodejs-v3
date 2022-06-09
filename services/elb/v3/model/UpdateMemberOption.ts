

export class UpdateMemberOption {
    private 'admin_state_up'?: boolean | undefined;
    public name?: string;
    public weight?: number;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateMemberOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withName(name: string): UpdateMemberOption {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): UpdateMemberOption {
        this['weight'] = weight;
        return this;
    }
}