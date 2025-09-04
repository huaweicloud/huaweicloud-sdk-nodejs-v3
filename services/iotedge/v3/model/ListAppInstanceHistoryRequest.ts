

export class ListAppInstanceHistoryRequest {
    private 'cluster_id'?: string;
    private 'app_instance_id'?: string;
    public namespace?: string;
    public constructor(clusterId?: string, appInstanceId?: string) { 
        this['cluster_id'] = clusterId;
        this['app_instance_id'] = appInstanceId;
    }
    public withClusterId(clusterId: string): ListAppInstanceHistoryRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppInstanceId(appInstanceId: string): ListAppInstanceHistoryRequest {
        this['app_instance_id'] = appInstanceId;
        return this;
    }
    public set appInstanceId(appInstanceId: string  | undefined) {
        this['app_instance_id'] = appInstanceId;
    }
    public get appInstanceId(): string | undefined {
        return this['app_instance_id'];
    }
    public withNamespace(namespace: string): ListAppInstanceHistoryRequest {
        this['namespace'] = namespace;
        return this;
    }
}