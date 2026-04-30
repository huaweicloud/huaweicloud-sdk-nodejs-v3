

export class ShowResourceDetailAccessKeyRequest {
    private 'cluster_id'?: string;
    private 'app_id'?: string;
    private 'service_type'?: string;
    private 'algorithm_type'?: string;
    private 'certificate_type'?: string;
    public limit?: number;
    public offset?: number;
    public from?: number;
    public to?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ShowResourceDetailAccessKeyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppId(appId: string): ShowResourceDetailAccessKeyRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withServiceType(serviceType: string): ShowResourceDetailAccessKeyRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withAlgorithmType(algorithmType: string): ShowResourceDetailAccessKeyRequest {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withCertificateType(certificateType: string): ShowResourceDetailAccessKeyRequest {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withLimit(limit: number): ShowResourceDetailAccessKeyRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowResourceDetailAccessKeyRequest {
        this['offset'] = offset;
        return this;
    }
    public withFrom(from: number): ShowResourceDetailAccessKeyRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ShowResourceDetailAccessKeyRequest {
        this['to'] = to;
        return this;
    }
}