import { TagInfo } from './TagInfo';
import { WebTamperPrivilegedProcessRequestInfo } from './WebTamperPrivilegedProcessRequestInfo';
import { WebTamperProtectDirRequestInfo } from './WebTamperProtectDirRequestInfo';
import { WebTamperTimingOffConfigInfoRequestInfo } from './WebTamperTimingOffConfigInfoRequestInfo';


export class BatchStartWebTamperProtectionRequestInfo {
    private 'host_id_list'?: Array<string>;
    private 'charging_mode'?: string;
    private 'resource_id'?: string;
    public tags?: Array<TagInfo>;
    private 'protect_dir_info'?: WebTamperProtectDirRequestInfo;
    private 'enable_timing_off'?: boolean;
    private 'timing_off_config_info'?: WebTamperTimingOffConfigInfoRequestInfo;
    private 'enable_rasp_protect'?: boolean;
    private 'rasp_path'?: string;
    private 'enable_privileged_process'?: boolean;
    private 'privileged_process_info'?: WebTamperPrivilegedProcessRequestInfo;
    public constructor(hostIdList?: Array<string>, protectDirInfo?: WebTamperProtectDirRequestInfo) { 
        this['host_id_list'] = hostIdList;
        this['protect_dir_info'] = protectDirInfo;
    }
    public withHostIdList(hostIdList: Array<string>): BatchStartWebTamperProtectionRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withChargingMode(chargingMode: string): BatchStartWebTamperProtectionRequestInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): BatchStartWebTamperProtectionRequestInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTags(tags: Array<TagInfo>): BatchStartWebTamperProtectionRequestInfo {
        this['tags'] = tags;
        return this;
    }
    public withProtectDirInfo(protectDirInfo: WebTamperProtectDirRequestInfo): BatchStartWebTamperProtectionRequestInfo {
        this['protect_dir_info'] = protectDirInfo;
        return this;
    }
    public set protectDirInfo(protectDirInfo: WebTamperProtectDirRequestInfo  | undefined) {
        this['protect_dir_info'] = protectDirInfo;
    }
    public get protectDirInfo(): WebTamperProtectDirRequestInfo | undefined {
        return this['protect_dir_info'];
    }
    public withEnableTimingOff(enableTimingOff: boolean): BatchStartWebTamperProtectionRequestInfo {
        this['enable_timing_off'] = enableTimingOff;
        return this;
    }
    public set enableTimingOff(enableTimingOff: boolean  | undefined) {
        this['enable_timing_off'] = enableTimingOff;
    }
    public get enableTimingOff(): boolean | undefined {
        return this['enable_timing_off'];
    }
    public withTimingOffConfigInfo(timingOffConfigInfo: WebTamperTimingOffConfigInfoRequestInfo): BatchStartWebTamperProtectionRequestInfo {
        this['timing_off_config_info'] = timingOffConfigInfo;
        return this;
    }
    public set timingOffConfigInfo(timingOffConfigInfo: WebTamperTimingOffConfigInfoRequestInfo  | undefined) {
        this['timing_off_config_info'] = timingOffConfigInfo;
    }
    public get timingOffConfigInfo(): WebTamperTimingOffConfigInfoRequestInfo | undefined {
        return this['timing_off_config_info'];
    }
    public withEnableRaspProtect(enableRaspProtect: boolean): BatchStartWebTamperProtectionRequestInfo {
        this['enable_rasp_protect'] = enableRaspProtect;
        return this;
    }
    public set enableRaspProtect(enableRaspProtect: boolean  | undefined) {
        this['enable_rasp_protect'] = enableRaspProtect;
    }
    public get enableRaspProtect(): boolean | undefined {
        return this['enable_rasp_protect'];
    }
    public withRaspPath(raspPath: string): BatchStartWebTamperProtectionRequestInfo {
        this['rasp_path'] = raspPath;
        return this;
    }
    public set raspPath(raspPath: string  | undefined) {
        this['rasp_path'] = raspPath;
    }
    public get raspPath(): string | undefined {
        return this['rasp_path'];
    }
    public withEnablePrivilegedProcess(enablePrivilegedProcess: boolean): BatchStartWebTamperProtectionRequestInfo {
        this['enable_privileged_process'] = enablePrivilegedProcess;
        return this;
    }
    public set enablePrivilegedProcess(enablePrivilegedProcess: boolean  | undefined) {
        this['enable_privileged_process'] = enablePrivilegedProcess;
    }
    public get enablePrivilegedProcess(): boolean | undefined {
        return this['enable_privileged_process'];
    }
    public withPrivilegedProcessInfo(privilegedProcessInfo: WebTamperPrivilegedProcessRequestInfo): BatchStartWebTamperProtectionRequestInfo {
        this['privileged_process_info'] = privilegedProcessInfo;
        return this;
    }
    public set privilegedProcessInfo(privilegedProcessInfo: WebTamperPrivilegedProcessRequestInfo  | undefined) {
        this['privileged_process_info'] = privilegedProcessInfo;
    }
    public get privilegedProcessInfo(): WebTamperPrivilegedProcessRequestInfo | undefined {
        return this['privileged_process_info'];
    }
}