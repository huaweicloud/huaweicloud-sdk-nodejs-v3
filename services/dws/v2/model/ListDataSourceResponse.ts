import { ExtDataSource } from './ExtDataSource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataSourceResponse extends SdkResponse {
    private 'data_sources'?: Array<ExtDataSource> | undefined;
    private 'project_id'?: string | undefined;
    private 'cluster_id'?: string | undefined;
    public type?: string;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDataSources(dataSources: Array<ExtDataSource>): ListDataSourceResponse {
        this['data_sources'] = dataSources;
        return this;
    }
    public set dataSources(dataSources: Array<ExtDataSource> | undefined) {
        this['data_sources'] = dataSources;
    }
    public get dataSources() {
        return this['data_sources'];
    }
    public withProjectId(projectId: string): ListDataSourceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withClusterId(clusterId: string): ListDataSourceResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
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