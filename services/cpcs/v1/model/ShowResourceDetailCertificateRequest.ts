

export class ShowResourceDetailCertificateRequest {
    private 'cluster_id'?: string;
    private 'app_id'?: string;
    private 'service_type'?: string;
    private 'algorithm_type'?: string;
    private 'certificate_type'?: string;
    private 'page_size'?: number;
    private 'page_num'?: number;
    public from?: number;
    public to?: number;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ShowResourceDetailCertificateRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppId(appId: string): ShowResourceDetailCertificateRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withServiceType(serviceType: string): ShowResourceDetailCertificateRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withAlgorithmType(algorithmType: string): ShowResourceDetailCertificateRequest {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withCertificateType(certificateType: string): ShowResourceDetailCertificateRequest {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withPageSize(pageSize: number): ShowResourceDetailCertificateRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNum(pageNum: number): ShowResourceDetailCertificateRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withFrom(from: number): ShowResourceDetailCertificateRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowResourceDetailCertificateRequest {
        this['to'] = to;
        return this;
    }
}