import { CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo } from './CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo';
import { CreateWebTamperProtectionConfigRequestBodyQuotaInfo } from './CreateWebTamperProtectionConfigRequestBodyQuotaInfo';


export class CreateWebTamperProtectionConfigRequestBody {
    public type?: string;
    private 'protect_mode'?: string;
    private 'monitor_process'?: boolean;
    private 'privileged_process_list'?: Array<string>;
    private 'privileged_child'?: boolean;
    private 'container_wtp_info'?: CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo;
    private 'open_protection_immediately'?: boolean;
    private 'quota_info'?: CreateWebTamperProtectionConfigRequestBodyQuotaInfo;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): CreateWebTamperProtectionConfigRequestBody {
        this['type'] = type;
        return this;
    }
    public withProtectMode(protectMode: string): CreateWebTamperProtectionConfigRequestBody {
        this['protect_mode'] = protectMode;
        return this;
    }
    public set protectMode(protectMode: string  | undefined) {
        this['protect_mode'] = protectMode;
    }
    public get protectMode(): string | undefined {
        return this['protect_mode'];
    }
    public withMonitorProcess(monitorProcess: boolean): CreateWebTamperProtectionConfigRequestBody {
        this['monitor_process'] = monitorProcess;
        return this;
    }
    public set monitorProcess(monitorProcess: boolean  | undefined) {
        this['monitor_process'] = monitorProcess;
    }
    public get monitorProcess(): boolean | undefined {
        return this['monitor_process'];
    }
    public withPrivilegedProcessList(privilegedProcessList: Array<string>): CreateWebTamperProtectionConfigRequestBody {
        this['privileged_process_list'] = privilegedProcessList;
        return this;
    }
    public set privilegedProcessList(privilegedProcessList: Array<string>  | undefined) {
        this['privileged_process_list'] = privilegedProcessList;
    }
    public get privilegedProcessList(): Array<string> | undefined {
        return this['privileged_process_list'];
    }
    public withPrivilegedChild(privilegedChild: boolean): CreateWebTamperProtectionConfigRequestBody {
        this['privileged_child'] = privilegedChild;
        return this;
    }
    public set privilegedChild(privilegedChild: boolean  | undefined) {
        this['privileged_child'] = privilegedChild;
    }
    public get privilegedChild(): boolean | undefined {
        return this['privileged_child'];
    }
    public withContainerWtpInfo(containerWtpInfo: CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo): CreateWebTamperProtectionConfigRequestBody {
        this['container_wtp_info'] = containerWtpInfo;
        return this;
    }
    public set containerWtpInfo(containerWtpInfo: CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo  | undefined) {
        this['container_wtp_info'] = containerWtpInfo;
    }
    public get containerWtpInfo(): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo | undefined {
        return this['container_wtp_info'];
    }
    public withOpenProtectionImmediately(openProtectionImmediately: boolean): CreateWebTamperProtectionConfigRequestBody {
        this['open_protection_immediately'] = openProtectionImmediately;
        return this;
    }
    public set openProtectionImmediately(openProtectionImmediately: boolean  | undefined) {
        this['open_protection_immediately'] = openProtectionImmediately;
    }
    public get openProtectionImmediately(): boolean | undefined {
        return this['open_protection_immediately'];
    }
    public withQuotaInfo(quotaInfo: CreateWebTamperProtectionConfigRequestBodyQuotaInfo): CreateWebTamperProtectionConfigRequestBody {
        this['quota_info'] = quotaInfo;
        return this;
    }
    public set quotaInfo(quotaInfo: CreateWebTamperProtectionConfigRequestBodyQuotaInfo  | undefined) {
        this['quota_info'] = quotaInfo;
    }
    public get quotaInfo(): CreateWebTamperProtectionConfigRequestBodyQuotaInfo | undefined {
        return this['quota_info'];
    }
}