

export class ListApplicationInstancesRequest {
    private 'X-Security-Token'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListApplicationInstancesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withInstanceId(instanceId: string): ListApplicationInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListApplicationInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApplicationInstancesRequest {
        this['marker'] = marker;
        return this;
    }
}