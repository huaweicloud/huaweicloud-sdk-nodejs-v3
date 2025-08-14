

export class ListApplicationInstanceCertificatesRequest {
    private 'X-Security-Token'?: string;
    public limit?: number;
    public marker?: string;
    private 'instance_id'?: string;
    private 'application_instance_id'?: string;
    public constructor(instanceId?: string, applicationInstanceId?: string) { 
        this['instance_id'] = instanceId;
        this['application_instance_id'] = applicationInstanceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListApplicationInstanceCertificatesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withLimit(limit: number): ListApplicationInstanceCertificatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApplicationInstanceCertificatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withInstanceId(instanceId: string): ListApplicationInstanceCertificatesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApplicationInstanceId(applicationInstanceId: string): ListApplicationInstanceCertificatesRequest {
        this['application_instance_id'] = applicationInstanceId;
        return this;
    }
    public set applicationInstanceId(applicationInstanceId: string  | undefined) {
        this['application_instance_id'] = applicationInstanceId;
    }
    public get applicationInstanceId(): string | undefined {
        return this['application_instance_id'];
    }
}