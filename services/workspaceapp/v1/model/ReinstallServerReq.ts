

export class ReinstallServerReq {
    private 'update_access_agent'?: boolean;
    public constructor() { 
    }
    public withUpdateAccessAgent(updateAccessAgent: boolean): ReinstallServerReq {
        this['update_access_agent'] = updateAccessAgent;
        return this;
    }
    public set updateAccessAgent(updateAccessAgent: boolean  | undefined) {
        this['update_access_agent'] = updateAccessAgent;
    }
    public get updateAccessAgent(): boolean | undefined {
        return this['update_access_agent'];
    }
}