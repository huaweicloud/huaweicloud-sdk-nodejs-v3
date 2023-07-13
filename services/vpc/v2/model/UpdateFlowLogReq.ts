

export class UpdateFlowLogReq {
    public name?: string;
    public description?: string;
    private 'admin_state'?: boolean | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateFlowLogReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateFlowLogReq {
        this['description'] = description;
        return this;
    }
    public withAdminState(adminState: boolean): UpdateFlowLogReq {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: boolean | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState() {
        return this['admin_state'];
    }
}