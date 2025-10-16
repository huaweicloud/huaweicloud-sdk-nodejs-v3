

export class ShowStatusInstanceRequest {
    private 'cluster_id'?: string;
    private 'app_id'?: string;
    private 'instance_id'?: string;
    public from?: number;
    public to?: number;
    public period?: number;
    public filter?: string;
    private 'server_type'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ShowStatusInstanceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppId(appId: string): ShowStatusInstanceRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withInstanceId(instanceId: string): ShowStatusInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withFrom(from: number): ShowStatusInstanceRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowStatusInstanceRequest {
        this['to'] = to;
        return this;
    }
    public withPeriod(period: number): ShowStatusInstanceRequest {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): ShowStatusInstanceRequest {
        this['filter'] = filter;
        return this;
    }
    public withServerType(serverType: string): ShowStatusInstanceRequest {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
}