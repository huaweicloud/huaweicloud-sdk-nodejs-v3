import { AggrPrometheusInfo } from './AggrPrometheusInfo';


export class PromInstanceRequestModel {
    private 'prom_name'?: string;
    private 'prom_type'?: string;
    private 'prom_version'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'aggr_prometheus_info'?: Array<AggrPrometheusInfo>;
    public constructor(promName?: string, promType?: string) { 
        this['prom_name'] = promName;
        this['prom_type'] = promType;
    }
    public withPromName(promName: string): PromInstanceRequestModel {
        this['prom_name'] = promName;
        return this;
    }
    public set promName(promName: string  | undefined) {
        this['prom_name'] = promName;
    }
    public get promName(): string | undefined {
        return this['prom_name'];
    }
    public withPromType(promType: string): PromInstanceRequestModel {
        this['prom_type'] = promType;
        return this;
    }
    public set promType(promType: string  | undefined) {
        this['prom_type'] = promType;
    }
    public get promType(): string | undefined {
        return this['prom_type'];
    }
    public withPromVersion(promVersion: string): PromInstanceRequestModel {
        this['prom_version'] = promVersion;
        return this;
    }
    public set promVersion(promVersion: string  | undefined) {
        this['prom_version'] = promVersion;
    }
    public get promVersion(): string | undefined {
        return this['prom_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PromInstanceRequestModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): PromInstanceRequestModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAggrPrometheusInfo(aggrPrometheusInfo: Array<AggrPrometheusInfo>): PromInstanceRequestModel {
        this['aggr_prometheus_info'] = aggrPrometheusInfo;
        return this;
    }
    public set aggrPrometheusInfo(aggrPrometheusInfo: Array<AggrPrometheusInfo>  | undefined) {
        this['aggr_prometheus_info'] = aggrPrometheusInfo;
    }
    public get aggrPrometheusInfo(): Array<AggrPrometheusInfo> | undefined {
        return this['aggr_prometheus_info'];
    }
}