import { ExtDataSource } from './ExtDataSource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataSourceResponse extends SdkResponse {
    private 'data_sources'?: Array<ExtDataSource>;
    private 'project_id'?: string;
    private 'cluster_id'?: string;
    public type?: string;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDataSources(dataSources: Array<ExtDataSource>): ListDataSourceResponse {
        this['data_sources'] = dataSources;
        return this;
    }
    public set dataSources(dataSources: Array<ExtDataSource>  | undefined) {
        this['data_sources'] = dataSources;
    }
    public get dataSources(): Array<ExtDataSource> | undefined {
        return this['data_sources'];
    }
    public withProjectId(projectId: string): ListDataSourceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withClusterId(clusterId: string): ListDataSourceResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withType(type: string): ListDataSourceResponse {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): ListDataSourceResponse {
        this['count'] = count;
        return this;
    }
}