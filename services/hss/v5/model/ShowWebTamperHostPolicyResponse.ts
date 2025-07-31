import { ListPrivilegedProcessResponseInfo } from './ListPrivilegedProcessResponseInfo';
import { ListTimingOffConfigInfoResponseInfo } from './ListTimingOffConfigInfoResponseInfo';
import { WtpProtectDirResponseInfo } from './WtpProtectDirResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWebTamperHostPolicyResponse extends SdkResponse {
    private 'protect_dir_num'?: number;
    private 'protect_dir_info'?: WtpProtectDirResponseInfo;
    private 'enable_timing_off'?: boolean;
    private 'timing_off_config_info'?: ListTimingOffConfigInfoResponseInfo;
    private 'enable_rasp_protect'?: boolean;
    private 'rasp_path'?: string;
    private 'enable_privileged_process'?: boolean;
    private 'privileged_child_status'?: boolean;
    private 'privileged_process_path_list'?: Array<string>;
    private 'privileged_process_info'?: ListPrivilegedProcessResponseInfo;
    public constructor() { 
        super();
    }
    public withProtectDirNum(protectDirNum: number): ShowWebTamperHostPolicyResponse {
        this['protect_dir_num'] = protectDirNum;
        return this;
    }
    public set protectDirNum(protectDirNum: number  | undefined) {
        this['protect_dir_num'] = protectDirNum;
    }
    public get protectDirNum(): number | undefined {
        return this['protect_dir_num'];
    }
    public withProtectDirInfo(protectDirInfo: WtpProtectDirResponseInfo): ShowWebTamperHostPolicyResponse {
        this['protect_dir_info'] = protectDirInfo;
        return this;
    }
    public set protectDirInfo(protectDirInfo: WtpProtectDirResponseInfo  | undefined) {
        this['protect_dir_info'] = protectDirInfo;
    }
    public get protectDirInfo(): WtpProtectDirResponseInfo | undefined {
        return this['protect_dir_info'];
    }
    public withEnableTimingOff(enableTimingOff: boolean): ShowWebTamperHostPolicyResponse {
        this['enable_timing_off'] = enableTimingOff;
        return this;
    }
    public set enableTimingOff(enableTimingOff: boolean  | undefined) {
        this['enable_timing_off'] = enableTimingOff;
    }
    public get enableTimingOff(): boolean | undefined {
        return this['enable_timing_off'];
    }
    public withTimingOffConfigInfo(timingOffConfigInfo: ListTimingOffConfigInfoResponseInfo): ShowWebTamperHostPolicyResponse {
        this['timing_off_config_info'] = timingOffConfigInfo;
        return this;
    }
    public set timingOffConfigInfo(timingOffConfigInfo: ListTimingOffConfigInfoResponseInfo  | undefined) {
        this['timing_off_config_info'] = timingOffConfigInfo;
    }
    public get timingOffConfigInfo(): ListTimingOffConfigInfoResponseInfo | undefined {
        return this['timing_off_config_info'];
    }
    public withEnableRaspProtect(enableRaspProtect: boolean): ShowWebTamperHostPolicyResponse {
        this['enable_rasp_protect'] = enableRaspProtect;
        return this;
    }
    public set enableRaspProtect(enableRaspProtect: boolean  | undefined) {
        this['enable_rasp_protect'] = enableRaspProtect;
    }
    public get enableRaspProtect(): boolean | undefined {
        return this['enable_rasp_protect'];
    }
    public withRaspPath(raspPath: string): ShowWebTamperHostPolicyResponse {
        this['rasp_path'] = raspPath;
        return this;
    }
    public set raspPath(raspPath: string  | undefined) {
        this['rasp_path'] = raspPath;
    }
    public get raspPath(): string | undefined {
        return this['rasp_path'];
    }
    public withEnablePrivilegedProcess(enablePrivilegedProcess: boolean): ShowWebTamperHostPolicyResponse {
        this['enable_privileged_process'] = enablePrivilegedProcess;
        return this;
    }
    public set enablePrivilegedProcess(enablePrivilegedProcess: boolean  | undefined) {
        this['enable_privileged_process'] = enablePrivilegedProcess;
    }
    public get enablePrivilegedProcess(): boolean | undefined {
        return this['enable_privileged_process'];
    }
    public withPrivilegedChildStatus(privilegedChildStatus: boolean): ShowWebTamperHostPolicyResponse {
        this['privileged_child_status'] = privilegedChildStatus;
        return this;
    }
    public set privilegedChildStatus(privilegedChildStatus: boolean  | undefined) {
        this['privileged_child_status'] = privilegedChildStatus;
    }
    public get privilegedChildStatus(): boolean | undefined {
        return this['privileged_child_status'];
    }
    public withPrivilegedProcessPathList(privilegedProcessPathList: Array<string>): ShowWebTamperHostPolicyResponse {
        this['privileged_process_path_list'] = privilegedProcessPathList;
        return this;
    }
    public set privilegedProcessPathList(privilegedProcessPathList: Array<string>  | undefined) {
        this['privileged_process_path_list'] = privilegedProcessPathList;
    }
    public get privilegedProcessPathList(): Array<string> | undefined {
        return this['privileged_process_path_list'];
    }
    public withPrivilegedProcessInfo(privilegedProcessInfo: ListPrivilegedProcessResponseInfo): ShowWebTamperHostPolicyResponse {
        this['privileged_process_info'] = privilegedProcessInfo;
        return this;
    }
    public set privilegedProcessInfo(privilegedProcessInfo: ListPrivilegedProcessResponseInfo  | undefined) {
        this['privileged_process_info'] = privilegedProcessInfo;
    }
    public get privilegedProcessInfo(): ListPrivilegedProcessResponseInfo | undefined {
        return this['privileged_process_info'];
    }
}