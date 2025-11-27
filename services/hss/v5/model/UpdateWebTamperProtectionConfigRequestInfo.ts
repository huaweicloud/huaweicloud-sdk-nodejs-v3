import { ProtectDirectoryInfo } from './ProtectDirectoryInfo';
import { UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo } from './UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo';


export class UpdateWebTamperProtectionConfigRequestInfo {
    public type?: string;
    private 'protection_config_id'?: string;
    private 'protect_mode'?: string;
    private 'monitor_process'?: boolean;
    private 'privileged_process_list'?: Array<string>;
    private 'privileged_child'?: boolean;
    private 'container_wtp_info'?: UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo;
    private 'protect_directory_info_list'?: Array<ProtectDirectoryInfo>;
    private 'exclude_file_types'?: Array<string>;
    public constructor(type?: string, protectionConfigId?: string) { 
        this['type'] = type;
        this['protection_config_id'] = protectionConfigId;
    }
    public withType(type: string): UpdateWebTamperProtectionConfigRequestInfo {
        this['type'] = type;
        return this;
    }
    public withProtectionConfigId(protectionConfigId: string): UpdateWebTamperProtectionConfigRequestInfo {
        this['protection_config_id'] = protectionConfigId;
        return this;
    }
    public set protectionConfigId(protectionConfigId: string  | undefined) {
        this['protection_config_id'] = protectionConfigId;
    }
    public get protectionConfigId(): string | undefined {
        return this['protection_config_id'];
    }
    public withProtectMode(protectMode: string): UpdateWebTamperProtectionConfigRequestInfo {
        this['protect_mode'] = protectMode;
        return this;
    }
    public set protectMode(protectMode: string  | undefined) {
        this['protect_mode'] = protectMode;
    }
    public get protectMode(): string | undefined {
        return this['protect_mode'];
    }
    public withMonitorProcess(monitorProcess: boolean): UpdateWebTamperProtectionConfigRequestInfo {
        this['monitor_process'] = monitorProcess;
        return this;
    }
    public set monitorProcess(monitorProcess: boolean  | undefined) {
        this['monitor_process'] = monitorProcess;
    }
    public get monitorProcess(): boolean | undefined {
        return this['monitor_process'];
    }
    public withPrivilegedProcessList(privilegedProcessList: Array<string>): UpdateWebTamperProtectionConfigRequestInfo {
        this['privileged_process_list'] = privilegedProcessList;
        return this;
    }
    public set privilegedProcessList(privilegedProcessList: Array<string>  | undefined) {
        this['privileged_process_list'] = privilegedProcessList;
    }
    public get privilegedProcessList(): Array<string> | undefined {
        return this['privileged_process_list'];
    }
    public withPrivilegedChild(privilegedChild: boolean): UpdateWebTamperProtectionConfigRequestInfo {
        this['privileged_child'] = privilegedChild;
        return this;
    }
    public set privilegedChild(privilegedChild: boolean  | undefined) {
        this['privileged_child'] = privilegedChild;
    }
    public get privilegedChild(): boolean | undefined {
        return this['privileged_child'];
    }
    public withContainerWtpInfo(containerWtpInfo: UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo): UpdateWebTamperProtectionConfigRequestInfo {
        this['container_wtp_info'] = containerWtpInfo;
        return this;
    }
    public set containerWtpInfo(containerWtpInfo: UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo  | undefined) {
        this['container_wtp_info'] = containerWtpInfo;
    }
    public get containerWtpInfo(): UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo | undefined {
        return this['container_wtp_info'];
    }
    public withProtectDirectoryInfoList(protectDirectoryInfoList: Array<ProtectDirectoryInfo>): UpdateWebTamperProtectionConfigRequestInfo {
        this['protect_directory_info_list'] = protectDirectoryInfoList;
        return this;
    }
    public set protectDirectoryInfoList(protectDirectoryInfoList: Array<ProtectDirectoryInfo>  | undefined) {
        this['protect_directory_info_list'] = protectDirectoryInfoList;
    }
    public get protectDirectoryInfoList(): Array<ProtectDirectoryInfo> | undefined {
        return this['protect_directory_info_list'];
    }
    public withExcludeFileTypes(excludeFileTypes: Array<string>): UpdateWebTamperProtectionConfigRequestInfo {
        this['exclude_file_types'] = excludeFileTypes;
        return this;
    }
    public set excludeFileTypes(excludeFileTypes: Array<string>  | undefined) {
        this['exclude_file_types'] = excludeFileTypes;
    }
    public get excludeFileTypes(): Array<string> | undefined {
        return this['exclude_file_types'];
    }
}