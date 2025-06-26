

export class BatchReinstallServerReq {
    private 'server_ids'?: Array<string>;
    private 'update_access_agent'?: boolean;
    public constructor() { 
    }
    public withServerIds(serverIds: Array<string>): BatchReinstallServerReq {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withUpdateAccessAgent(updateAccessAgent: boolean): BatchReinstallServerReq {
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