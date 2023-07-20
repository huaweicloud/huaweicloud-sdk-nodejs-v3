

export class SubJobEntities {
    private 'server_id'?: string;
    private 'nic_id'?: string;
    private 'errorcode_message'?: string;
    public constructor() { 
    }
    public withServerId(serverId: string): SubJobEntities {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNicId(nicId: string): SubJobEntities {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string  | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId(): string | undefined {
        return this['nic_id'];
    }
    public withErrorcodeMessage(errorcodeMessage: string): SubJobEntities {
        this['errorcode_message'] = errorcodeMessage;
        return this;
    }
    public set errorcodeMessage(errorcodeMessage: string  | undefined) {
        this['errorcode_message'] = errorcodeMessage;
    }
    public get errorcodeMessage(): string | undefined {
        return this['errorcode_message'];
    }
}