import { HostVulOperateInfo } from './HostVulOperateInfo';
import { VulOperateInfo } from './VulOperateInfo';


export class ChangeVulStatusRequestInfo {
    private 'operate_type'?: string;
    public remark?: string;
    private 'select_type'?: string;
    public type?: string;
    private 'data_list'?: Array<VulOperateInfo>;
    private 'host_data_list'?: Array<HostVulOperateInfo>;
    public constructor(operateType?: string, dataList?: Array<VulOperateInfo>) { 
        this['operate_type'] = operateType;
        this['data_list'] = dataList;
    }
    public withOperateType(operateType: string): ChangeVulStatusRequestInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withRemark(remark: string): ChangeVulStatusRequestInfo {
        this['remark'] = remark;
        return this;
    }
    public withSelectType(selectType: string): ChangeVulStatusRequestInfo {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withType(type: string): ChangeVulStatusRequestInfo {
        this['type'] = type;
        return this;
    }
    public withDataList(dataList: Array<VulOperateInfo>): ChangeVulStatusRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulOperateInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulOperateInfo> | undefined {
        return this['data_list'];
    }
    public withHostDataList(hostDataList: Array<HostVulOperateInfo>): ChangeVulStatusRequestInfo {
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