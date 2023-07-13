

export class ConnectorOrderRequestBody {
    private 'instance_id': string | undefined;
    public url?: string;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ConnectorOrderRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withUrl(url: string): ConnectorOrderRequestBody {
        this['url'] = url;
        return this;
    }
}