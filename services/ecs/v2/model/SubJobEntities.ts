

export class SubJobEntities {
    private 'server_id'?: string | undefined;
    private 'nic_id'?: string | undefined;
    private 'errorcode_message'?: string | undefined;
    public constructor() { 
    }
    public withServerId(serverId: string): SubJobEntities {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withNicId(nicId: string): SubJobEntities {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId() {
        return this['nic_id'];
    }
    public withErrorcodeMessage(errorcodeMessage: string): SubJobEntities {
        this['errorcode_message'] = errorcodeMessage;
        return this;
    }
    public set errorcodeMessage(errorcodeMessage: string | undefined) {
        this['errorcode_message'] = errorcodeMessage;
    }
    public get errorcodeMessage() {
        return this['errorcode_message'];
    }
}