

export class ScansSubscriptionRes {
    private 'vulnerabilities_statistics_status'?: boolean;
    private 'account_change_history_status'?: boolean;
    private 'danger_ports_status'?: boolean;
    private 'weak_pwd_status'?: boolean;
    public constructor() { 
    }
    public withVulnerabilitiesStatisticsStatus(vulnerabilitiesStatisticsStatus: boolean): ScansSubscriptionRes {
        this['vulnerabilities_statistics_status'] = vulnerabilitiesStatisticsStatus;
        return this;
    }
    public set vulnerabilitiesStatisticsStatus(vulnerabilitiesStatisticsStatus: boolean  | undefined) {
        this['vulnerabilities_statistics_status'] = vulnerabilitiesStatisticsStatus;
    }
    public get vulnerabilitiesStatisticsStatus(): boolean | undefined {
        return this['vulnerabilities_statistics_status'];
    }
    public withAccountChangeHistoryStatus(accountChangeHistoryStatus: boolean): ScansSubscriptionRes {
        this['account_change_history_status'] = accountChangeHistoryStatus;
        return this;
    }
    public set accountChangeHistoryStatus(accountChangeHistoryStatus: boolean  | undefined) {
        this['account_change_history_status'] = accountChangeHistoryStatus;
    }
    public get accountChangeHistoryStatus(): boolean | undefined {
        return this['account_change_history_status'];
    }
    public withDangerPortsStatus(dangerPortsStatus: boolean): ScansSubscriptionRes {
        this['danger_ports_status'] = dangerPortsStatus;
        return this;
    }
    public set dangerPortsStatus(dangerPortsStatus: boolean  | undefined) {
        this['danger_ports_status'] = dangerPortsStatus;
    }
    public get dangerPortsStatus(): boolean | undefined {
        return this['danger_ports_status'];
    }
    public withWeakPwdStatus(weakPwdStatus: boolean): ScansSubscriptionRes {
        this['weak_pwd_status'] = weakPwdStatus;
        return this;
    }
    public set weakPwdStatus(weakPwdStatus: boolean  | undefined) {
        this['weak_pwd_status'] = weakPwdStatus;
    }
    public get weakPwdStatus(): boolean | undefined {
        return this['weak_pwd_status'];
    }
}