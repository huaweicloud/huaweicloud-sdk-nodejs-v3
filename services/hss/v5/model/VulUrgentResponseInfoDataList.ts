import { VulUrgentResponseInfoCveList } from './VulUrgentResponseInfoCveList';
import { VulUrgentResponseInfoDisabledOperateTypes } from './VulUrgentResponseInfoDisabledOperateTypes';


export class VulUrgentResponseInfoDataList {
    private 'label_list'?: Array<string>;
    private 'repair_priority'?: string;
    private 'repair_success_num'?: number;
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'cve_list'?: Array<VulUrgentResponseInfoCveList>;
    private 'is_affected_business'?: boolean;
    private 'host_id'?: string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'host_name'?: string;
    private 'asset_value'?: string;
    public status?: string;
    private 'first_scan_time'?: number;
    private 'scan_time'?: number;
    private 'disabled_operate_types'?: Array<VulUrgentResponseInfoDisabledOperateTypes>;
    public constructor() { 
    }
    public withLabelList(labelList: Array<string>): VulUrgentResponseInfoDataList {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withRepairPriority(repairPriority: string): VulUrgentResponseInfoDataList {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withRepairSuccessNum(repairSuccessNum: number): VulUrgentResponseInfoDataList {
        this['repair_success_num'] = repairSuccessNum;
        return this;
    }
    public set repairSuccessNum(repairSuccessNum: number  | undefined) {
        this['repair_success_num'] = repairSuccessNum;
    }
    public get repairSuccessNum(): number | undefined {
        return this['repair_success_num'];
    }
    public withVulId(vulId: string): VulUrgentResponseInfoDataList {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): VulUrgentResponseInfoDataList {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withCveList(cveList: Array<VulUrgentResponseInfoCveList>): VulUrgentResponseInfoDataList {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<VulUrgentResponseInfoCveList>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<VulUrgentResponseInfoCveList> | undefined {
        return this['cve_list'];
    }
    public withIsAffectedBusiness(isAffectedBusiness: boolean): VulUrgentResponseInfoDataList {
        this['is_affected_business'] = isAffectedBusiness;
        return this;
    }
    public set isAffectedBusiness(isAffectedBusiness: boolean  | undefined) {
        this['is_affected_business'] = isAffectedBusiness;
    }
    public get isAffectedBusiness(): boolean | undefined {
        return this['is_affected_business'];
    }
    public withHostId(hostId: string): VulUrgentResponseInfoDataList {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPublicIp(publicIp: string): VulUrgentResponseInfoDataList {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): VulUrgentResponseInfoDataList {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withHostName(hostName: string): VulUrgentResponseInfoDataList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAssetValue(assetValue: string): VulUrgentResponseInfoDataList {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withStatus(status: string): VulUrgentResponseInfoDataList {
        this['status'] = status;
        return this;
    }
    public withFirstScanTime(firstScanTime: number): VulUrgentResponseInfoDataList {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withScanTime(scanTime: number): VulUrgentResponseInfoDataList {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withDisabledOperateTypes(disabledOperateTypes: Array<VulUrgentResponseInfoDisabledOperateTypes>): VulUrgentResponseInfoDataList {
        this['disabled_operate_types'] = disabledOperateTypes;
        return this;
    }
    public set disabledOperateTypes(disabledOperateTypes: Array<VulUrgentResponseInfoDisabledOperateTypes>  | undefined) {
        this['disabled_operate_types'] = disabledOperateTypes;
    }
    public get disabledOperateTypes(): Array<VulUrgentResponseInfoDisabledOperateTypes> | undefined {
        return this['disabled_operate_types'];
    }
}