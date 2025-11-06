

export class DeleteCertsRequest {
    private 'cluster_id'?: string;
    private 'cert_id'?: string;
    public constructor(clusterId?: string, certId?: string) { 
        this['cluster_id'] = clusterId;
        this['cert_id'] = certId;
    }
    public withClusterId(clusterId: string): DeleteCertsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withCertId(certId: string): DeleteCertsRequest {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
}