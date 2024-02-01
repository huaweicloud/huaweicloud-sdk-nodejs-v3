

export class DeleteConnectorRequest {
    private 'instance_id'?: string;
    public body?: object;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteConnectorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: object): DeleteConnectorRequest {
        this['body'] = body;
        return this;
    }
}