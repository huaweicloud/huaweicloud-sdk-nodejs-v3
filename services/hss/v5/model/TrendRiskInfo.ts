

export class TrendRiskInfo {
    private 'baseline_risk_num'?: number;
    private 'asset_risk_num'?: number;
    private 'alarm_risk_num'?: number;
    private 'vul_risk_num'?: number;
    private 'update_time'?: number;
    public time?: number;
    public score?: number;
    public constructor() { 
    }
    public withBaselineRiskNum(baselineRiskNum: number): TrendRiskInfo {
        this['baseline_risk_num'] = baselineRiskNum;
        return this;
    }
    public set baselineRiskNum(baselineRiskNum: number  | undefined) {
        this['baseline_risk_num'] = baselineRiskNum;
    }
    public get baselineRiskNum(): number | undefined {
        return this['baseline_risk_num'];
    }
    public withAssetRiskNum(assetRiskNum: number): TrendRiskInfo {
        this['asset_risk_num'] = assetRiskNum;
        return this;
    }
    public set assetRiskNum(assetRiskNum: number  | undefined) {
        this['asset_risk_num'] = assetRiskNum;
    }
    public get assetRiskNum(): number | undefined {
        return this['asset_risk_num'];
    }
    public withAlarmRiskNum(alarmRiskNum: number): TrendRiskInfo {
        this['alarm_risk_num'] = alarmRiskNum;
        return this;
    }
    public set alarmRiskNum(alarmRiskNum: number  | undefined) {
        this['alarm_risk_num'] = alarmRiskNum;
    }
    public get alarmRiskNum(): number | undefined {
        return this['alarm_risk_num'];
    }
    public withVulRiskNum(vulRiskNum: number): TrendRiskInfo {
        this['vul_risk_num'] = vulRiskNum;
        return this;
    }
    public set vulRiskNum(vulRiskNum: number  | undefined) {
        this['vul_risk_num'] = vulRiskNum;
    }
    public get vulRiskNum(): number | undefined {
        return this['vul_risk_num'];
    }
    public withUpdateTime(updateTime: number): TrendRiskInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTime(time: number): TrendRiskInfo {
        this['time'] = time;
        return this;
    }
    public withScore(score: number): TrendRiskInfo {
        this['score'] = score;
        return this;
    }
}