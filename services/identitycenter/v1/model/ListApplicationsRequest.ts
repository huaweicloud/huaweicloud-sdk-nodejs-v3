

export class ListApplicationsRequest {
    private 'X-Security-Token'?: string;
    public limit?: number;
    public marker?: string;
    private 'instance_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListApplicationsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withLimit(limit: number): ListApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApplicationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withInstanceId(instanceId: string): ListApplicationsRequest {
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