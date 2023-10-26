
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulStaticsResponse extends SdkResponse {
    private 'need_urgent_repair'?: number;
    public unrepair?: number;
    private 'existed_vul_hosts'?: number;
    private 'today_handle'?: number;
    private 'all_handle'?: number;
    public supported?: number;
    private 'vul_library_update_time'?: number;
    public constructor() { 
        super();
    }
    public withNeedUrgentRepair(needUrgentRepair: number): ShowVulStaticsResponse {
        this['need_urgent_repair'] = needUrgentRepair;
        return this;
    }
    public set needUrgentRepair(needUrgentRepair: number  | undefined) {
        this['need_urgent_repair'] = needUrgentRepair;
    }
    public get needUrgentRepair(): number | undefined {
        return this['need_urgent_repair'];
    }
    public withUnrepair(unrepair: number): ShowVulStaticsResponse {
        this['unrepair'] = unrepair;
        return this;
    }
    public withExistedVulHosts(existedVulHosts: number): ShowVulStaticsResponse {
        this['existed_vul_hosts'] = existedVulHosts;
        return this;
    }
    public set existedVulHosts(existedVulHosts: number  | undefined) {
        this['existed_vul_hosts'] = existedVulHosts;
    }
    public get existedVulHosts(): number | undefined {
        return this['existed_vul_hosts'];
    }
    public withTodayHandle(todayHandle: number): ShowVulStaticsResponse {
        this['today_handle'] = todayHandle;
        return this;
    }
    public set todayHandle(todayHandle: number  | undefined) {
        this['today_handle'] = todayHandle;
    }
    public get todayHandle(): number | undefined {
        return this['today_handle'];
    }
    public withAllHandle(allHandle: number): ShowVulStaticsResponse {
        this['all_handle'] = allHandle;
        return this;
    }
    public set allHandle(allHandle: number  | undefined) {
        this['all_handle'] = allHandle;
    }
    public get allHandle(): number | undefined {
        return this['all_handle'];
    }
    public withSupported(supported: number): ShowVulStaticsResponse {
        this['supported'] = supported;
        return this;
    }
    public withVulLibraryUpdateTime(vulLibraryUpdateTime: number): ShowVulStaticsResponse {
        this['vul_library_update_time'] = vulLibraryUpdateTime;
        return this;
    }
    public set vulLibraryUpdateTime(vulLibraryUpdateTime: number  | undefined) {
        this['vul_library_update_time'] = vulLibraryUpdateTime;
    }
    public get vulLibraryUpdateTime(): number | undefined {
        return this['vul_library_update_time'];
    }
}