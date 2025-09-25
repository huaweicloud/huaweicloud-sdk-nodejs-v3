

export class RiskHandleInfoAlarmInfo {
    private 'alarm_num'?: number;
    private 'malware_file_num'?: number;
    private 'auto_block_num'?: number;
    private 'manual_handle_num'?: number;
    private 'auto_handle_num'?: number;
    private 'handle_rate'?: number;
    private 'beat_rate'?: number;
    private 'virus_kill_config_enable'?: boolean;
    private 'user_open_virus_kill_rate'?: number;
    private 'alarm_notify_config_enable'?: boolean;
    private 'user_open_alarm_notify_rate'?: number;
    private 'ransomware_event_num'?: number;
    private 'ransomware_event_host_list'?: Array<string>;
    public constructor() { 
    }
    public withAlarmNum(alarmNum: number): RiskHandleInfoAlarmInfo {
        this['alarm_num'] = alarmNum;
        return this;
    }
    public set alarmNum(alarmNum: number  | undefined) {
        this['alarm_num'] = alarmNum;
    }
    public get alarmNum(): number | undefined {
        return this['alarm_num'];
    }
    public withMalwareFileNum(malwareFileNum: number): RiskHandleInfoAlarmInfo {
        this['malware_file_num'] = malwareFileNum;
        return this;
    }
    public set malwareFileNum(malwareFileNum: number  | undefined) {
        this['malware_file_num'] = malwareFileNum;
    }
    public get malwareFileNum(): number | undefined {
        return this['malware_file_num'];
    }
    public withAutoBlockNum(autoBlockNum: number): RiskHandleInfoAlarmInfo {
        this['auto_block_num'] = autoBlockNum;
        return this;
    }
    public set autoBlockNum(autoBlockNum: number  | undefined) {
        this['auto_block_num'] = autoBlockNum;
    }
    public get autoBlockNum(): number | undefined {
        return this['auto_block_num'];
    }
    public withManualHandleNum(manualHandleNum: number): RiskHandleInfoAlarmInfo {
        this['manual_handle_num'] = manualHandleNum;
        return this;
    }
    public set manualHandleNum(manualHandleNum: number  | undefined) {
        this['manual_handle_num'] = manualHandleNum;
    }
    public get manualHandleNum(): number | undefined {
        return this['manual_handle_num'];
    }
    public withAutoHandleNum(autoHandleNum: number): RiskHandleInfoAlarmInfo {
        this['auto_handle_num'] = autoHandleNum;
        return this;
    }
    public set autoHandleNum(autoHandleNum: number  | undefined) {
        this['auto_handle_num'] = autoHandleNum;
    }
    public get autoHandleNum(): number | undefined {
        return this['auto_handle_num'];
    }
    public withHandleRate(handleRate: number): RiskHandleInfoAlarmInfo {
        this['handle_rate'] = handleRate;
        return this;
    }
    public set handleRate(handleRate: number  | undefined) {
        this['handle_rate'] = handleRate;
    }
    public get handleRate(): number | undefined {
        return this['handle_rate'];
    }
    public withBeatRate(beatRate: number): RiskHandleInfoAlarmInfo {
        this['beat_rate'] = beatRate;
        return this;
    }
    public set beatRate(beatRate: number  | undefined) {
        this['beat_rate'] = beatRate;
    }
    public get beatRate(): number | undefined {
        return this['beat_rate'];
    }
    public withVirusKillConfigEnable(virusKillConfigEnable: boolean): RiskHandleInfoAlarmInfo {
        this['virus_kill_config_enable'] = virusKillConfigEnable;
        return this;
    }
    public set virusKillConfigEnable(virusKillConfigEnable: boolean  | undefined) {
        this['virus_kill_config_enable'] = virusKillConfigEnable;
    }
    public get virusKillConfigEnable(): boolean | undefined {
        return this['virus_kill_config_enable'];
    }
    public withUserOpenVirusKillRate(userOpenVirusKillRate: number): RiskHandleInfoAlarmInfo {
        this['user_open_virus_kill_rate'] = userOpenVirusKillRate;
        return this;
    }
    public set userOpenVirusKillRate(userOpenVirusKillRate: number  | undefined) {
        this['user_open_virus_kill_rate'] = userOpenVirusKillRate;
    }
    public get userOpenVirusKillRate(): number | undefined {
        return this['user_open_virus_kill_rate'];
    }
    public withAlarmNotifyConfigEnable(alarmNotifyConfigEnable: boolean): RiskHandleInfoAlarmInfo {
        this['alarm_notify_config_enable'] = alarmNotifyConfigEnable;
        return this;
    }
    public set alarmNotifyConfigEnable(alarmNotifyConfigEnable: boolean  | undefined) {
        this['alarm_notify_config_enable'] = alarmNotifyConfigEnable;
    }
    public get alarmNotifyConfigEnable(): boolean | undefined {
        return this['alarm_notify_config_enable'];
    }
    public withUserOpenAlarmNotifyRate(userOpenAlarmNotifyRate: number): RiskHandleInfoAlarmInfo {
        this['user_open_alarm_notify_rate'] = userOpenAlarmNotifyRate;
        return this;
    }
    public set userOpenAlarmNotifyRate(userOpenAlarmNotifyRate: number  | undefined) {
        this['user_open_alarm_notify_rate'] = userOpenAlarmNotifyRate;
    }
    public get userOpenAlarmNotifyRate(): number | undefined {
        return this['user_open_alarm_notify_rate'];
    }
    public withRansomwareEventNum(ransomwareEventNum: number): RiskHandleInfoAlarmInfo {
        this['ransomware_event_num'] = ransomwareEventNum;
        return this;
    }
    public set ransomwareEventNum(ransomwareEventNum: number  | undefined) {
        this['ransomware_event_num'] = ransomwareEventNum;
    }
    public get ransomwareEventNum(): number | undefined {
        return this['ransomware_event_num'];
    }
    public withRansomwareEventHostList(ransomwareEventHostList: Array<string>): RiskHandleInfoAlarmInfo {
        this['ransomware_event_host_list'] = ransomwareEventHostList;
        return this;
    }
    public set ransomwareEventHostList(ransomwareEventHostList: Array<string>  | undefined) {
        this['ransomware_event_host_list'] = ransomwareEventHostList;
    }
    public get ransomwareEventHostList(): Array<string> | undefined {
        return this['ransomware_event_host_list'];
    }
}