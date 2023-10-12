import { UpgradingTheKernelBody } from './UpgradingTheKernelBody';


export class UpgradeCoreRequest {
    private 'cluster_id'?: string;
    private 'inst_type'?: string;
    public body?: UpgradingTheKernelBody;
    public constructor(clusterId?: string, instType?: string) { 
        this['cluster_id'] = clusterId;
        this['inst_type'] = instType;
    }
    public withClusterId(clusterId: string): UpgradeCoreRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withInstType(instType: string): UpgradeCoreRequest {
        this['inst_type'] = instType;
        return this;
    }
    public set instType(instType: string  | undefined) {
        this['inst_type'] = instType;
    }
    public get instType(): string | undefined {
        return this['inst_type'];
    }
    public withBody(body: UpgradingTheKernelBody): UpgradeCoreRequest {
        this['body'] = body;
        return this;
    }
}