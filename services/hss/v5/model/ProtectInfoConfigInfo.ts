

export class ProtectInfoConfigInfo {
    private 'un_upgrade_agent_host_num'?: number;
    private 'auto_upgrade_agent_enable'?: boolean;
    private 'user_open_auto_upgrade_agent_rate'?: number;
    private 'un_open_ransomware_policy_host_num'?: number;
    private 'to_be_optimized_ransomware_policy_host_num'?: number;
    private 'user_open_ransomware_backup_rate'?: number;
    private 'un_open_two_factor_login_host_num'?: number;
    private 'user_open_two_factor_login_rate'?: number;
    private 'un_virus_kill_host_num'?: number;
    private 'virus_kill_host_num'?: number;
    private 'malware_collect_enable'?: boolean;
    private 'user_open_malware_collect_rate'?: number;
    private 'container_image_scan_freq'?: number;
    private 'container_image_scan_freq_beat_rate'?: number;
    private 'need_open_config_num'?: number;
    private 'container_image_scan_total_num'?: number;
    public constructor() { 
    }
    public withUnUpgradeAgentHostNum(unUpgradeAgentHostNum: number): ProtectInfoConfigInfo {
        this['un_upgrade_agent_host_num'] = unUpgradeAgentHostNum;
        return this;
    }
    public set unUpgradeAgentHostNum(unUpgradeAgentHostNum: number  | undefined) {
        this['un_upgrade_agent_host_num'] = unUpgradeAgentHostNum;
    }
    public get unUpgradeAgentHostNum(): number | undefined {
        return this['un_upgrade_agent_host_num'];
    }
    public withAutoUpgradeAgentEnable(autoUpgradeAgentEnable: boolean): ProtectInfoConfigInfo {
        this['auto_upgrade_agent_enable'] = autoUpgradeAgentEnable;
        return this;
    }
    public set autoUpgradeAgentEnable(autoUpgradeAgentEnable: boolean  | undefined) {
        this['auto_upgrade_agent_enable'] = autoUpgradeAgentEnable;
    }
    public get autoUpgradeAgentEnable(): boolean | undefined {
        return this['auto_upgrade_agent_enable'];
    }
    public withUserOpenAutoUpgradeAgentRate(userOpenAutoUpgradeAgentRate: number): ProtectInfoConfigInfo {
        this['user_open_auto_upgrade_agent_rate'] = userOpenAutoUpgradeAgentRate;
        return this;
    }
    public set userOpenAutoUpgradeAgentRate(userOpenAutoUpgradeAgentRate: number  | undefined) {
        this['user_open_auto_upgrade_agent_rate'] = userOpenAutoUpgradeAgentRate;
    }
    public get userOpenAutoUpgradeAgentRate(): number | undefined {
        return this['user_open_auto_upgrade_agent_rate'];
    }
    public withUnOpenRansomwarePolicyHostNum(unOpenRansomwarePolicyHostNum: number): ProtectInfoConfigInfo {
        this['un_open_ransomware_policy_host_num'] = unOpenRansomwarePolicyHostNum;
        return this;
    }
    public set unOpenRansomwarePolicyHostNum(unOpenRansomwarePolicyHostNum: number  | undefined) {
        this['un_open_ransomware_policy_host_num'] = unOpenRansomwarePolicyHostNum;
    }
    public get unOpenRansomwarePolicyHostNum(): number | undefined {
        return this['un_open_ransomware_policy_host_num'];
    }
    public withToBeOptimizedRansomwarePolicyHostNum(toBeOptimizedRansomwarePolicyHostNum: number): ProtectInfoConfigInfo {
        this['to_be_optimized_ransomware_policy_host_num'] = toBeOptimizedRansomwarePolicyHostNum;
        return this;
    }
    public set toBeOptimizedRansomwarePolicyHostNum(toBeOptimizedRansomwarePolicyHostNum: number  | undefined) {
        this['to_be_optimized_ransomware_policy_host_num'] = toBeOptimizedRansomwarePolicyHostNum;
    }
    public get toBeOptimizedRansomwarePolicyHostNum(): number | undefined {
        return this['to_be_optimized_ransomware_policy_host_num'];
    }
    public withUserOpenRansomwareBackupRate(userOpenRansomwareBackupRate: number): ProtectInfoConfigInfo {
        this['user_open_ransomware_backup_rate'] = userOpenRansomwareBackupRate;
        return this;
    }
    public set userOpenRansomwareBackupRate(userOpenRansomwareBackupRate: number  | undefined) {
        this['user_open_ransomware_backup_rate'] = userOpenRansomwareBackupRate;
    }
    public get userOpenRansomwareBackupRate(): number | undefined {
        return this['user_open_ransomware_backup_rate'];
    }
    public withUnOpenTwoFactorLoginHostNum(unOpenTwoFactorLoginHostNum: number): ProtectInfoConfigInfo {
        this['un_open_two_factor_login_host_num'] = unOpenTwoFactorLoginHostNum;
        return this;
    }
    public set unOpenTwoFactorLoginHostNum(unOpenTwoFactorLoginHostNum: number  | undefined) {
        this['un_open_two_factor_login_host_num'] = unOpenTwoFactorLoginHostNum;
    }
    public get unOpenTwoFactorLoginHostNum(): number | undefined {
        return this['un_open_two_factor_login_host_num'];
    }
    public withUserOpenTwoFactorLoginRate(userOpenTwoFactorLoginRate: number): ProtectInfoConfigInfo {
        this['user_open_two_factor_login_rate'] = userOpenTwoFactorLoginRate;
        return this;
    }
    public set userOpenTwoFactorLoginRate(userOpenTwoFactorLoginRate: number  | undefined) {
        this['user_open_two_factor_login_rate'] = userOpenTwoFactorLoginRate;
    }
    public get userOpenTwoFactorLoginRate(): number | undefined {
        return this['user_open_two_factor_login_rate'];
    }
    public withUnVirusKillHostNum(unVirusKillHostNum: number): ProtectInfoConfigInfo {
        this['un_virus_kill_host_num'] = unVirusKillHostNum;
        return this;
    }
    public set unVirusKillHostNum(unVirusKillHostNum: number  | undefined) {
        this['un_virus_kill_host_num'] = unVirusKillHostNum;
    }
    public get unVirusKillHostNum(): number | undefined {
        return this['un_virus_kill_host_num'];
    }
    public withVirusKillHostNum(virusKillHostNum: number): ProtectInfoConfigInfo {
        this['virus_kill_host_num'] = virusKillHostNum;
        return this;
    }
    public set virusKillHostNum(virusKillHostNum: number  | undefined) {
        this['virus_kill_host_num'] = virusKillHostNum;
    }
    public get virusKillHostNum(): number | undefined {
        return this['virus_kill_host_num'];
    }
    public withMalwareCollectEnable(malwareCollectEnable: boolean): ProtectInfoConfigInfo {
        this['malware_collect_enable'] = malwareCollectEnable;
        return this;
    }
    public set malwareCollectEnable(malwareCollectEnable: boolean  | undefined) {
        this['malware_collect_enable'] = malwareCollectEnable;
    }
    public get malwareCollectEnable(): boolean | undefined {
        return this['malware_collect_enable'];
    }
    public withUserOpenMalwareCollectRate(userOpenMalwareCollectRate: number): ProtectInfoConfigInfo {
        this['user_open_malware_collect_rate'] = userOpenMalwareCollectRate;
        return this;
    }
    public set userOpenMalwareCollectRate(userOpenMalwareCollectRate: number  | undefined) {
        this['user_open_malware_collect_rate'] = userOpenMalwareCollectRate;
    }
    public get userOpenMalwareCollectRate(): number | undefined {
        return this['user_open_malware_collect_rate'];
    }
    public withContainerImageScanFreq(containerImageScanFreq: number): ProtectInfoConfigInfo {
        this['container_image_scan_freq'] = containerImageScanFreq;
        return this;
    }
    public set containerImageScanFreq(containerImageScanFreq: number  | undefined) {
        this['container_image_scan_freq'] = containerImageScanFreq;
    }
    public get containerImageScanFreq(): number | undefined {
        return this['container_image_scan_freq'];
    }
    public withContainerImageScanFreqBeatRate(containerImageScanFreqBeatRate: number): ProtectInfoConfigInfo {
        this['container_image_scan_freq_beat_rate'] = containerImageScanFreqBeatRate;
        return this;
    }
    public set containerImageScanFreqBeatRate(containerImageScanFreqBeatRate: number  | undefined) {
        this['container_image_scan_freq_beat_rate'] = containerImageScanFreqBeatRate;
    }
    public get containerImageScanFreqBeatRate(): number | undefined {
        return this['container_image_scan_freq_beat_rate'];
    }
    public withNeedOpenConfigNum(needOpenConfigNum: number): ProtectInfoConfigInfo {
        this['need_open_config_num'] = needOpenConfigNum;
        return this;
    }
    public set needOpenConfigNum(needOpenConfigNum: number  | undefined) {
        this['need_open_config_num'] = needOpenConfigNum;
    }
    public get needOpenConfigNum(): number | undefined {
        return this['need_open_config_num'];
    }
    public withContainerImageScanTotalNum(containerImageScanTotalNum: number): ProtectInfoConfigInfo {
        this['container_image_scan_total_num'] = containerImageScanTotalNum;
        return this;
    }
    public set containerImageScanTotalNum(containerImageScanTotalNum: number  | undefined) {
        this['container_image_scan_total_num'] = containerImageScanTotalNum;
    }
    public get containerImageScanTotalNum(): number | undefined {
        return this['container_image_scan_total_num'];
    }
}