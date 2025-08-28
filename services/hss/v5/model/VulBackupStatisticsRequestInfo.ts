import { HostVulOperateInfo } from './HostVulOperateInfo';
import { VulOperateInfo } from './VulOperateInfo';


export class VulBackupStatisticsRequestInfo {
    private 'select_type'?: string;
    public type?: string;
    private 'data_list'?: Array<VulOperateInfo>;
    private 'host_data_list'?: Array<HostVulOperateInfo>;
    public constructor() { 
    }
    public withSelectType(selectType: string): VulBackupStatisticsRequestInfo {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withType(type: string): VulBackupStatisticsRequestInfo {
        this['type'] = type;
        return this;
    }
    public withDataList(dataList: Array<VulOperateInfo>): VulBackupStatisticsRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulOperateInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulOperateInfo> | undefined {
        return this['data_list'];
    }
    public withHostDataList(hostDataList: Array<HostVulOperateInfo>): VulBackupStatisticsRequestInfo {
        this['host_data_list'] = hostDataList;
        return this;
    }
    public set hostDataList(hostDataList: Array<HostVulOperateInfo>  | undefined) {
        this['host_data_list'] = hostDataList;
    }
    public get hostDataList(): Array<HostVulOperateInfo> | undefined {
        return this['host_data_list'];
    }
}