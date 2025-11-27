import { ProtectDirectoryResponseInfo } from './ProtectDirectoryResponseInfo';
import { WebTamperProtectionConfigResponseInfoContainerWtpInfo } from './WebTamperProtectionConfigResponseInfoContainerWtpInfo';


export class WebTamperProtectionConfigResponseInfo {
    public id?: string;
    private 'protect_mode'?: string;
    private 'monitor_process'?: boolean;
    private 'privileged_process_list'?: Array<string>;
    private 'privileged_child'?: boolean;
    private 'protect_directory_info_list'?: Array<ProtectDirectoryResponseInfo>;
    private 'exclude_file_types'?: Array<string>;
    public status?: string;
    private 'protected_container_nums'?: number;
    private 'protected_event_nums'?: number;
    private 'resource_id'?: string;
    private 'container_wtp_info'?: WebTamperProtectionConfigResponseInfoContainerWtpInfo;
    public constructor() { 
    }
    public withId(id: string): WebTamperProtectionConfigResponseInfo {
        this['id'] = id;
        return this;
    }
    public withProtectMode(protectMode: string): WebTamperProtectionConfigResponseInfo {
        this['protect_mode'] = protectMode;
        return this;
    }
    public set protectMode(protectMode: string  | undefined) {
        this['protect_mode'] = protectMode;
    }
    public get protectMode(): string | undefined {
        return this['protect_mode'];
    }
    public withMonitorProcess(monitorProcess: boolean): WebTamperProtectionConfigResponseInfo {
        this['monitor_process'] = monitorProcess;
        return this;
    }
    public set monitorProcess(monitorProcess: boolean  | undefined) {
        this['monitor_process'] = monitorProcess;
    }
    public get monitorProcess(): boolean | undefined {
        return this['monitor_process'];
    }
    public withPrivilegedProcessList(privilegedProcessList: Array<string>): WebTamperProtectionConfigResponseInfo {
        this['privileged_process_list'] = privilegedProcessList;
        return this;
    }
    public set privilegedProcessList(privilegedProcessList: Array<string>  | undefined) {
        this['privileged_process_list'] = privilegedProcessList;
    }
    public get privilegedProcessList(): Array<string> | undefined {
        return this['privileged_process_list'];
    }
    public withPrivilegedChild(privilegedChild: boolean): WebTamperProtectionConfigResponseInfo {
        this['privileged_child'] = privilegedChild;
        return this;
    }
    public set privilegedChild(privilegedChild: boolean  | undefined) {
        this['privileged_child'] = privilegedChild;
    }
    public get privilegedChild(): boolean | undefined {
        return this['privileged_child'];
    }
    public withProtectDirectoryInfoList(protectDirectoryInfoList: Array<ProtectDirectoryResponseInfo>): WebTamperProtectionConfigResponseInfo {
        this['protect_directory_info_list'] = protectDirectoryInfoList;
        return this;
    }
    public set protectDirectoryInfoList(protectDirectoryInfoList: Array<ProtectDirectoryResponseInfo>  | undefined) {
        this['protect_directory_info_list'] = protectDirectoryInfoList;
    }
    public get protectDirectoryInfoList(): Array<ProtectDirectoryResponseInfo> | undefined {
        return this['protect_directory_info_list'];
    }
    public withExcludeFileTypes(excludeFileTypes: Array<string>): WebTamperProtectionConfigResponseInfo {
        this['exclude_file_types'] = excludeFileTypes;
        return this;
    }
    public set excludeFileTypes(excludeFileTypes: Array<string>  | undefined) {
        this['exclude_file_types'] = excludeFileTypes;
    }
    public get excludeFileTypes(): Array<string> | undefined {
        return this['exclude_file_types'];
    }
    public withStatus(status: string): WebTamperProtectionConfigResponseInfo {
        this['status'] = status;
        return this;
    }
    public withProtectedContainerNums(protectedContainerNums: number): WebTamperProtectionConfigResponseInfo {
        this['protected_container_nums'] = protectedContainerNums;
        return this;
    }
    public set protectedContainerNums(protectedContainerNums: number  | undefined) {
        this['protected_container_nums'] = protectedContainerNums;
    }
    public get protectedContainerNums(): number | undefined {
        return this['protected_container_nums'];
    }
    public withProtectedEventNums(protectedEventNums: number): WebTamperProtectionConfigResponseInfo {
        this['protected_event_nums'] = protectedEventNums;
        return this;
    }
    public set protectedEventNums(protectedEventNums: number  | undefined) {
        this['protected_event_nums'] = protectedEventNums;
    }
    public get protectedEventNums(): number | undefined {
        return this['protected_event_nums'];
    }
    public withResourceId(resourceId: string): WebTamperProtectionConfigResponseInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withContainerWtpInfo(containerWtpInfo: WebTamperProtectionConfigResponseInfoContainerWtpInfo): WebTamperProtectionConfigResponseInfo {
        this['container_wtp_info'] = containerWtpInfo;
        return this;
    }
    public set containerWtpInfo(containerWtpInfo: WebTamperProtectionConfigResponseInfoContainerWtpInfo  | undefined) {
        this['container_wtp_info'] = containerWtpInfo;
    }
    public get containerWtpInfo(): WebTamperProtectionConfigResponseInfoContainerWtpInfo | undefined {
        return this['container_wtp_info'];
    }
}