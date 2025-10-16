

export class ShowStatisticInterfaceRequest {
    private 'cluster_id'?: string;
    private 'app_id'?: string;
    public from?: number;
    public to?: number;
    public period?: number;
    public filter?: string;
    public algorithm?: string;
    private 'algorithm_type'?: string;
    private 'certificate_type'?: string;
    private 'server_type'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ShowStatisticInterfaceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppId(appId: string): ShowStatisticInterfaceRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withFrom(from: number): ShowStatisticInterfaceRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowStatisticInterfaceRequest {
        this['to'] = to;
        return this;
    }
    public withPeriod(period: number): ShowStatisticInterfaceRequest {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): ShowStatisticInterfaceRequest {
        this['filter'] = filter;
        return this;
    }
    public withAlgorithm(algorithm: string): ShowStatisticInterfaceRequest {
        this['algorithm'] = algorithm;
        return this;
    }
    public withAlgorithmType(algorithmType: string): ShowStatisticInterfaceRequest {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withCertificateType(certificateType: string): ShowStatisticInterfaceRequest {
        this['certificate_type'] = certificateType;
        return this;
    }
    public set certificateType(certificateType: string  | undefined) {
        this['certificate_type'] = certificateType;
    }
    public get certificateType(): string | undefined {
        return this['certificate_type'];
    }
    public withServerType(serverType: string): ShowStatisticInterfaceRequest {
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