
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotReleaseResponse extends SdkResponse {
    private 'chart_name'?: string;
    private 'chart_public'?: boolean;
    private 'chart_version'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'create_at'?: string;
    public description?: string;
    public name?: string;
    public namespace?: string;
    public parameters?: string;
    public resources?: string;
    public status?: string;
    private 'status_description'?: string;
    private 'update_at'?: string;
    public values?: string;
    public version?: number;
    public constructor() { 
        super();
    }
    public withChartName(chartName: string): CreateAutopilotReleaseResponse {
        this['chart_name'] = chartName;
        return this;
    }
    public set chartName(chartName: string  | undefined) {
        this['chart_name'] = chartName;
    }
    public get chartName(): string | undefined {
        return this['chart_name'];
    }
    public withChartPublic(chartPublic: boolean): CreateAutopilotReleaseResponse {
        this['chart_public'] = chartPublic;
        return this;
    }
    public set chartPublic(chartPublic: boolean  | undefined) {
        this['chart_public'] = chartPublic;
    }
    public get chartPublic(): boolean | undefined {
        return this['chart_public'];
    }
    public withChartVersion(chartVersion: string): CreateAutopilotReleaseResponse {
        this['chart_version'] = chartVersion;
        return this;
    }
    public set chartVersion(chartVersion: string  | undefined) {
        this['chart_version'] = chartVersion;
    }
    public get chartVersion(): string | undefined {
        return this['chart_version'];
    }
    public withClusterId(clusterId: string): CreateAutopilotReleaseResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CreateAutopilotReleaseResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCreateAt(createAt: string): CreateAutopilotReleaseResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): CreateAutopilotReleaseResponse {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateAutopilotReleaseResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): CreateAutopilotReleaseResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withParameters(parameters: string): CreateAutopilotReleaseResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withResources(resources: string): CreateAutopilotReleaseResponse {
        this['resources'] = resources;
        return this;
    }
    public withStatus(status: string): CreateAutopilotReleaseResponse {
        this['status'] = status;
        return this;
    }
    public withStatusDescription(statusDescription: string): CreateAutopilotReleaseResponse {
        this['status_description'] = statusDescription;
        return this;
    }
    public set statusDescription(statusDescription: string  | undefined) {
        this['status_description'] = statusDescription;
    }
    public get statusDescription(): string | undefined {
        return this['status_description'];
    }
    public withUpdateAt(updateAt: string): CreateAutopilotReleaseResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withValues(values: string): CreateAutopilotReleaseResponse {
        this['values'] = values;
        return this;
    }
    public withVersion(version: number): CreateAutopilotReleaseResponse {
        this['version'] = version;
        return this;
    }
}