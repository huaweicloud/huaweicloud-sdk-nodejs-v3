

export class ListConnectionRequest {
    public condition?: string;
    public perpage?: string;
    public curpage?: string;
    private 'network_type'?: string;
    private 'datastore_type'?: string;
    private 'connection_type'?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withCondition(condition: string): ListConnectionRequest {
        this['condition'] = condition;
        return this;
    }
    public withPerpage(perpage: string): ListConnectionRequest {
        this['perpage'] = perpage;
        return this;
    }
    public withCurpage(curpage: string): ListConnectionRequest {
        this['curpage'] = curpage;
        return this;
    }
    public withNetworkType(networkType: string): ListConnectionRequest {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withDatastoreType(datastoreType: string): ListConnectionRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withConnectionType(connectionType: string): ListConnectionRequest {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withInstanceId(instanceId: string): ListConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}