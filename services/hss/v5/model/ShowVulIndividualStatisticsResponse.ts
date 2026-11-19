
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulIndividualStatisticsResponse extends SdkResponse {
    private 'need_urgent_repair_num'?: number;
    private 'unhandled_num'?: number;
    private 'existed_vul_host_num'?: number;
    private 'today_handled_num'?: number;
    private 'all_handled_num'?: number;
    private 'vul_library_supported_num'?: number;
    private 'vul_library_update_time'?: number;
    private 'linux_vul_unhandled_num'?: number;
    private 'windows_vul_unhandled_num'?: number;
    private 'web_cms_vul_unhandled_num'?: number;
    private 'app_vul_unhandled_num'?: number;
    private 'urgent_vul_unhandled_num'?: number;
    private 'need_reboot_host_num'?: number;
    private 'max_vul_handle_num'?: number;
    public constructor() { 
        super();
    }
    public withNeedUrgentRepairNum(needUrgentRepairNum: number): ShowVulIndividualStatisticsResponse {
        this['need_urgent_repair_num'] = needUrgentRepairNum;
        return this;
    }
    public set needUrgentRepairNum(needUrgentRepairNum: number  | undefined) {
        this['need_urgent_repair_num'] = needUrgentRepairNum;
    }
    public get needUrgentRepairNum(): number | undefined {
        return this['need_urgent_repair_num'];
    }
    public withUnhandledNum(unhandledNum: number): ShowVulIndividualStatisticsResponse {
        this['unhandled_num'] = unhandledNum;
        return this;
    }
    public set unhandledNum(unhandledNum: number  | undefined) {
        this['unhandled_num'] = unhandledNum;
    }
    public get unhandledNum(): number | undefined {
        return this['unhandled_num'];
    }
    public withExistedVulHostNum(existedVulHostNum: number): ShowVulIndividualStatisticsResponse {
        this['existed_vul_host_num'] = existedVulHostNum;
        return this;
    }
    public set existedVulHostNum(existedVulHostNum: number  | undefined) {
        this['existed_vul_host_num'] = existedVulHostNum;
    }
    public get existedVulHostNum(): number | undefined {
        return this['existed_vul_host_num'];
    }
    public withTodayHandledNum(todayHandledNum: number): ShowVulIndividualStatisticsResponse {
        this['today_handled_num'] = todayHandledNum;
        return this;
    }
    public set todayHandledNum(todayHandledNum: number  | undefined) {
        this['today_handled_num'] = todayHandledNum;
    }
    public get todayHandledNum(): number | undefined {
        return this['today_handled_num'];
    }
    public withAllHandledNum(allHandledNum: number): ShowVulIndividualStatisticsResponse {
        this['all_handled_num'] = allHandledNum;
        return this;
    }
    public set allHandledNum(allHandledNum: number  | undefined) {
        this['all_handled_num'] = allHandledNum;
    }
    public get allHandledNum(): number | undefined {
        return this['all_handled_num'];
    }
    public withVulLibrarySupportedNum(vulLibrarySupportedNum: number): ShowVulIndividualStatisticsResponse {
        this['vul_library_supported_num'] = vulLibrarySupportedNum;
        return this;
    }
    public set vulLibrarySupportedNum(vulLibrarySupportedNum: number  | undefined) {
        this['vul_library_supported_num'] = vulLibrarySupportedNum;
    }
    public get vulLibrarySupportedNum(): number | undefined {
        return this['vul_library_supported_num'];
    }
    public withVulLibraryUpdateTime(vulLibraryUpdateTime: number): ShowVulIndividualStatisticsResponse {
        this['vul_library_update_time'] = vulLibraryUpdateTime;
        return this;
    }
    public set vulLibraryUpdateTime(vulLibraryUpdateTime: number  | undefined) {
        this['vul_library_update_time'] = vulLibraryUpdateTime;
    }
    public get vulLibraryUpdateTime(): number | undefined {
        return this['vul_library_update_time'];
    }
    public withLinuxVulUnhandledNum(linuxVulUnhandledNum: number): ShowVulIndividualStatisticsResponse {
        this['linux_vul_unhandled_num'] = linuxVulUnhandledNum;
        return this;
    }
    public set linuxVulUnhandledNum(linuxVulUnhandledNum: number  | undefined) {
        this['linux_vul_unhandled_num'] = linuxVulUnhandledNum;
    }
    public get linuxVulUnhandledNum(): number | undefined {
        return this['linux_vul_unhandled_num'];
    }
    public withWindowsVulUnhandledNum(windowsVulUnhandledNum: number): ShowVulIndividualStatisticsResponse {
        this['windows_vul_unhandled_num'] = windowsVulUnhandledNum;
        return this;
    }
    public set windowsVulUnhandledNum(windowsVulUnhandledNum: number  | undefined) {
        this['windows_vul_unhandled_num'] = windowsVulUnhandledNum;
    }
    public get windowsVulUnhandledNum(): number | undefined {
        return this['windows_vul_unhandled_num'];
    }
    public withWebCmsVulUnhandledNum(webCmsVulUnhandledNum: number): ShowVulIndividualStatisticsResponse {
        this['web_cms_vul_unhandled_num'] = webCmsVulUnhandledNum;
        return this;
    }
    public set webCmsVulUnhandledNum(webCmsVulUnhandledNum: number  | undefined) {
        this['web_cms_vul_unhandled_num'] = webCmsVulUnhandledNum;
    }
    public get webCmsVulUnhandledNum(): number | undefined {
        return this['web_cms_vul_unhandled_num'];
    }
    public withAppVulUnhandledNum(appVulUnhandledNum: number): ShowVulIndividualStatisticsResponse {
        this['app_vul_unhandled_num'] = appVulUnhandledNum;
        return this;
    }
    public set appVulUnhandledNum(appVulUnhandledNum: number  | undefined) {
        this['app_vul_unhandled_num'] = appVulUnhandledNum;
    }
    public get appVulUnhandledNum(): number | undefined {
        return this['app_vul_unhandled_num'];
    }
    public withUrgentVulUnhandledNum(urgentVulUnhandledNum: number): ShowVulIndividualStatisticsResponse {
        this['urgent_vul_unhandled_num'] = urgentVulUnhandledNum;
        return this;
    }
    public set urgentVulUnhandledNum(urgentVulUnhandledNum: number  | undefined) {
        this['urgent_vul_unhandled_num'] = urgentVulUnhandledNum;
    }
    public get urgentVulUnhandledNum(): number | undefined {
        return this['urgent_vul_unhandled_num'];
    }
    public withNeedRebootHostNum(needRebootHostNum: number): ShowVulIndividualStatisticsResponse {
        this['need_reboot_host_num'] = needRebootHostNum;
        return this;
    }
    public set needRebootHostNum(needRebootHostNum: number  | undefined) {
        this['need_reboot_host_num'] = needRebootHostNum;
    }
    public get needRebootHostNum(): number | undefined {
        return this['need_reboot_host_num'];
    }
    public withMaxVulHandleNum(maxVulHandleNum: number): ShowVulIndividualStatisticsResponse {
        this['max_vul_handle_num'] = maxVulHandleNum;
        return this;
    }
    public set maxVulHandleNum(maxVulHandleNum: number  | undefined) {
        this['max_vul_handle_num'] = maxVulHandleNum;
    }
    public get maxVulHandleNum(): number | undefined {
        return this['max_vul_handle_num'];
    }
}