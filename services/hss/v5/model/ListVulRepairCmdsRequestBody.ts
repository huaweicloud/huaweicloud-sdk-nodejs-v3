import { HostVulOperateInfo } from './HostVulOperateInfo';
import { VulOperateInfo } from './VulOperateInfo';


export class ListVulRepairCmdsRequestBody {
    private 'select_type'?: string;
    private 'data_list'?: Array<VulOperateInfo>;
    private 'host_data_list'?: Array<HostVulOperateInfo>;
    private 'is_container'?: boolean;
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withSelectType(selectType: string): ListVulRepairCmdsRequestBody {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withDataList(dataList: Array<VulOperateInfo>): ListVulRepairCmdsRequestBody {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulOperateInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulOperateInfo> | undefined {
        return this['data_list'];
    }
    public withHostDataList(hostDataList: Array<HostVulOperateInfo>): ListVulRepairCmdsRequestBody {
        this['host_data_list'] = hostDataList;
        return this;
    }
    public set hostDataList(hostDataList: Array<HostVulOperateInfo>  | undefined) {
        this['host_data_list'] = hostDataList;
    }
    public get hostDataList(): Array<HostVulOperateInfo> | undefined {
        return this['host_data_list'];
    }
    public withIsContainer(isContainer: boolean): ListVulRepairCmdsRequestBody {
        this['is_container'] = isContainer;
        return this;
    }
    public set isContainer(isContainer: boolean  | undefined) {
        this['is_container'] = isContainer;
    }
    public get isContainer(): boolean | undefined {
        return this['is_container'];
    }
    public withClusterId(clusterId: string): ListVulRepairCmdsRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}