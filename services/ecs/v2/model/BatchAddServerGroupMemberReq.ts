

export class BatchAddServerGroupMemberReq {
    private 'server_ids'?: Array<string>;
    public constructor() { 
    }
    public withServerIds(serverIds: Array<string>): BatchAddServerGroupMemberReq {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
}