

export class VulHostHostsResponseInfoVulIdsInfo {
    private 'linux_vul_id_list'?: Array<string>;
    private 'windows_vul_id_list'?: Array<string>;
    private 'webcms_vul_id_list'?: Array<string>;
    private 'app_vul_id_list'?: Array<string>;
    private 'urgent_vul_id_list'?: Array<string>;
    public constructor() { 
    }
    public withLinuxVulIdList(linuxVulIdList: Array<string>): VulHostHostsResponseInfoVulIdsInfo {
        this['linux_vul_id_list'] = linuxVulIdList;
        return this;
    }
    public set linuxVulIdList(linuxVulIdList: Array<string>  | undefined) {
        this['linux_vul_id_list'] = linuxVulIdList;
    }
    public get linuxVulIdList(): Array<string> | undefined {
        return this['linux_vul_id_list'];
    }
    public withWindowsVulIdList(windowsVulIdList: Array<string>): VulHostHostsResponseInfoVulIdsInfo {
        this['windows_vul_id_list'] = windowsVulIdList;
        return this;
    }
    public set windowsVulIdList(windowsVulIdList: Array<string>  | undefined) {
        this['windows_vul_id_list'] = windowsVulIdList;
    }
    public get windowsVulIdList(): Array<string> | undefined {
        return this['windows_vul_id_list'];
    }
    public withWebcmsVulIdList(webcmsVulIdList: Array<string>): VulHostHostsResponseInfoVulIdsInfo {
        this['webcms_vul_id_list'] = webcmsVulIdList;
        return this;
    }
    public set webcmsVulIdList(webcmsVulIdList: Array<string>  | undefined) {
        this['webcms_vul_id_list'] = webcmsVulIdList;
    }
    public get webcmsVulIdList(): Array<string> | undefined {
        return this['webcms_vul_id_list'];
    }
    public withAppVulIdList(appVulIdList: Array<string>): VulHostHostsResponseInfoVulIdsInfo {
        this['app_vul_id_list'] = appVulIdList;
        return this;
    }
    public set appVulIdList(appVulIdList: Array<string>  | undefined) {
        this['app_vul_id_list'] = appVulIdList;
    }
    public get appVulIdList(): Array<string> | undefined {
        return this['app_vul_id_list'];
    }
    public withUrgentVulIdList(urgentVulIdList: Array<string>): VulHostHostsResponseInfoVulIdsInfo {
        this['urgent_vul_id_list'] = urgentVulIdList;
        return this;
    }
    public set urgentVulIdList(urgentVulIdList: Array<string>  | undefined) {
        this['urgent_vul_id_list'] = urgentVulIdList;
    }
    public get urgentVulIdList(): Array<string> | undefined {
        return this['urgent_vul_id_list'];
    }
}