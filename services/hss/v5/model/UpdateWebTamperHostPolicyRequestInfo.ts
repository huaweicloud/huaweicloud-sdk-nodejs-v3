import { WebTamperPrivilegedProcessRequestInfo } from './WebTamperPrivilegedProcessRequestInfo';
import { WebTamperProtectDirRequestInfo } from './WebTamperProtectDirRequestInfo';
import { WebTamperTimingOffConfigInfoRequestInfo } from './WebTamperTimingOffConfigInfoRequestInfo';


export class UpdateWebTamperHostPolicyRequestInfo {
    private 'protect_dir_info'?: WebTamperProtectDirRequestInfo;
    private 'enable_timing_off'?: boolean;
    private 'timing_off_config_info'?: WebTamperTimingOffConfigInfoRequestInfo;
    private 'enable_rasp_protect'?: boolean;
    private 'rasp_path'?: string;
    private 'enable_privileged_process'?: boolean;
    private 'privileged_process_info'?: WebTamperPrivilegedProcessRequestInfo;
    public constructor(protectDirInfo?: WebTamperProtectDirRequestInfo) { 
        this['protect_dir_info'] = protectDirInfo;
    }
    public withProtectDirInfo(protectDirInfo: WebTamperProtectDirRequestInfo): UpdateWebTamperHostPolicyRequestInfo {
        this['protect_dir_info'] = protectDirInfo;
        return this;
    }
    public set protectDirInfo(protectDirInfo: WebTamperProtectDirRequestInfo  | undefined) {
        this['protect_dir_info'] = protectDirInfo;
    }
    public get protectDirInfo(): WebTamperProtectDirRequestInfo | undefined {
        return this['protect_dir_info'];
    }
    public withEnableTimingOff(enableTimingOff: boolean): UpdateWebTamperHostPolicyRequestInfo {
        this['enable_timing_off'] = enableTimingOff;
        return this;
    }
    public set enableTimingOff(enableTimingOff: boolean  | undefined) {
        this['enable_timing_off'] = enableTimingOff;
    }
    public get enableTimingOff(): boolean | undefined {
        return this['enable_timing_off'];
    }
    public withTimingOffConfigInfo(timingOffConfigInfo: WebTamperTimingOffConfigInfoRequestInfo): UpdateWebTamperHostPolicyRequestInfo {
        this['timing_off_config_info'] = timingOffConfigInfo;
        return this;
    }
    public set timingOffConfigInfo(timingOffConfigInfo: WebTamperTimingOffConfigInfoRequestInfo  | undefined) {
        this['timing_off_config_info'] = timingOffConfigInfo;
    }
    public get timingOffConfigInfo(): WebTamperTimingOffConfigInfoRequestInfo | undefined {
        return this['timing_off_config_info'];
    }
    public withEnableRaspProtect(enableRaspProtect: boolean): UpdateWebTamperHostPolicyRequestInfo {
        this['enable_rasp_protect'] = enableRaspProtect;
        return this;
    }
    public set enableRaspProtect(enableRaspProtect: boolean  | undefined) {
        this['enable_rasp_protect'] = enableRaspProtect;
    }
    public get enableRaspProtect(): boolean | undefined {
        return this['enable_rasp_protect'];
    }
    public withRaspPath(raspPath: string): UpdateWebTamperHostPolicyRequestInfo {
        this['rasp_path'] = raspPath;
        return this;
    }
    public set raspPath(raspPath: string  | undefined) {
        this['rasp_path'] = raspPath;
    }
    public get raspPath(): string | undefined {
        return this['rasp_path'];
    }
    public withEnablePrivilegedProcess(enablePrivilegedProcess: boolean): UpdateWebTamperHostPolicyRequestInfo {
        this['enable_privileged_process'] = enablePrivilegedProcess;
        return this;
    }
    public set enablePrivilegedProcess(enablePrivilegedProcess: boolean  | undefined) {
        this['enable_privileged_process'] = enablePrivilegedProcess;
    }
    public get enablePrivilegedProcess(): boolean | undefined {
        return this['enable_privileged_process'];
    }
    public withPrivilegedProcessInfo(privilegedProcessInfo: WebTamperPrivilegedProcessRequestInfo): UpdateWebTamperHostPolicyRequestInfo {
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