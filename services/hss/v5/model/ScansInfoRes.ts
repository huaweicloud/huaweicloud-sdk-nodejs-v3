

export class ScansInfoRes {
    private 'vulnerabilities_statistics_info_list'?: Array<object>;
    private 'account_change_history_info_list'?: Array<object>;
    private 'danger_ports_info_list'?: Array<object>;
    private 'weak_pwd_info_list'?: Array<object>;
    public constructor() { 
    }
    public withVulnerabilitiesStatisticsInfoList(vulnerabilitiesStatisticsInfoList: Array<object>): ScansInfoRes {
        this['vulnerabilities_statistics_info_list'] = vulnerabilitiesStatisticsInfoList;
        return this;
    }
    public set vulnerabilitiesStatisticsInfoList(vulnerabilitiesStatisticsInfoList: Array<object>  | undefined) {
        this['vulnerabilities_statistics_info_list'] = vulnerabilitiesStatisticsInfoList;
    }
    public get vulnerabilitiesStatisticsInfoList(): Array<object> | undefined {
        return this['vulnerabilities_statistics_info_list'];
    }
    public withAccountChangeHistoryInfoList(accountChangeHistoryInfoList: Array<object>): ScansInfoRes {
        this['account_change_history_info_list'] = accountChangeHistoryInfoList;
        return this;
    }
    public set accountChangeHistoryInfoList(accountChangeHistoryInfoList: Array<object>  | undefined) {
        this['account_change_history_info_list'] = accountChangeHistoryInfoList;
    }
    public get accountChangeHistoryInfoList(): Array<object> | undefined {
        return this['account_change_history_info_list'];
    }
    public withDangerPortsInfoList(dangerPortsInfoList: Array<object>): ScansInfoRes {
        this['danger_ports_info_list'] = dangerPortsInfoList;
        return this;
    }
    public set dangerPortsInfoList(dangerPortsInfoList: Array<object>  | undefined) {
        this['danger_ports_info_list'] = dangerPortsInfoList;
    }
    public get dangerPortsInfoList(): Array<object> | undefined {
        return this['danger_ports_info_list'];
    }
    public withWeakPwdInfoList(weakPwdInfoList: Array<object>): ScansInfoRes {
        this['weak_pwd_info_list'] = weakPwdInfoList;
        return this;
    }
    public set weakPwdInfoList(weakPwdInfoList: Array<object>  | undefined) {
        this['weak_pwd_info_list'] = weakPwdInfoList;
    }
    public get weakPwdInfoList(): Array<object> | undefined {
        return this['weak_pwd_info_list'];
    }
}