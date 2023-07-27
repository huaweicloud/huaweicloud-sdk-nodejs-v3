

export class DeleteGatewayResponseV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    private 'response_id'?: string;
    public constructor(instanceId?: string, groupId?: string, responseId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
        this['response_id'] = responseId;
    }
    public withInstanceId(instanceId: string): DeleteGatewayResponseV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): DeleteGatewayResponseV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResponseId(responseId: string): DeleteGatewayResponseV2Request {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
}