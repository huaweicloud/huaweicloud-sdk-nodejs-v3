import { DatasetInfo } from './DatasetInfo';
import { ListCollectConfigResponseBodyAllVendors } from './ListCollectConfigResponseBodyAllVendors';
import { ListCollectConfigResponseBodyCofingStatistics } from './ListCollectConfigResponseBodyCofingStatistics';
import { ListCollectConfigResponseBodyDataList } from './ListCollectConfigResponseBodyDataList';
import { LtsResponseVo } from './LtsResponseVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectConfigResponse extends SdkResponse {
    private 'all_vendors'?: Array<ListCollectConfigResponseBodyAllVendors>;
    private 'cofing_statistics'?: ListCollectConfigResponseBodyCofingStatistics;
    private 'data_list'?: Array<ListCollectConfigResponseBodyDataList>;
    public datasets?: Array<DatasetInfo>;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'domain_id'?: string;
    private 'lts_sets'?: Array<LtsResponseVo>;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
        super();
    }
    public withAllVendors(allVendors: Array<ListCollectConfigResponseBodyAllVendors>): ListCollectConfigResponse {
        this['all_vendors'] = allVendors;
        return this;
    }
    public set allVendors(allVendors: Array<ListCollectConfigResponseBodyAllVendors>  | undefined) {
        this['all_vendors'] = allVendors;
    }
    public get allVendors(): Array<ListCollectConfigResponseBodyAllVendors> | undefined {
        return this['all_vendors'];
    }
    public withCofingStatistics(cofingStatistics: ListCollectConfigResponseBodyCofingStatistics): ListCollectConfigResponse {
        this['cofing_statistics'] = cofingStatistics;
        return this;
    }
    public set cofingStatistics(cofingStatistics: ListCollectConfigResponseBodyCofingStatistics  | undefined) {
        this['cofing_statistics'] = cofingStatistics;
    }
    public get cofingStatistics(): ListCollectConfigResponseBodyCofingStatistics | undefined {
        return this['cofing_statistics'];
    }
    public withDataList(dataList: Array<ListCollectConfigResponseBodyDataList>): ListCollectConfigResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListCollectConfigResponseBodyDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListCollectConfigResponseBodyDataList> | undefined {
        return this['data_list'];
    }
    public withDatasets(datasets: Array<DatasetInfo>): ListCollectConfigResponse {
        this['datasets'] = datasets;
        return this;
    }
    public withDataspaceId(dataspaceId: string): ListCollectConfigResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): ListCollectConfigResponse {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDomainId(domainId: string): ListCollectConfigResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withLtsSets(ltsSets: Array<LtsResponseVo>): ListCollectConfigResponse {
        this['lts_sets'] = ltsSets;
        return this;
    }
    public set ltsSets(ltsSets: Array<LtsResponseVo>  | undefined) {
        this['lts_sets'] = ltsSets;
    }
    public get ltsSets(): Array<LtsResponseVo> | undefined {
        return this['lts_sets'];
    }
    public withProjectId(projectId: string): ListCollectConfigResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): ListCollectConfigResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWorkspaceId(workspaceId: string): ListCollectConfigResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}