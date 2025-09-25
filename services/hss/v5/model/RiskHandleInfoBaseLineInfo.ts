

export class RiskHandleInfoBaseLineInfo {
    private 'config_risk_host_num'?: number;
    private 'config_risk_num'?: number;
    private 'passed_rate'?: number;
    private 'beat_rate'?: number;
    private 'weak_pwd_num'?: number;
    private 'passed_num'?: number;
    private 'total_config_risk_num'?: number;
    private 'version_recommend'?: string;
    public constructor() { 
    }
    public withConfigRiskHostNum(configRiskHostNum: number): RiskHandleInfoBaseLineInfo {
        this['config_risk_host_num'] = configRiskHostNum;
        return this;
    }
    public set configRiskHostNum(configRiskHostNum: number  | undefined) {
        this['config_risk_host_num'] = configRiskHostNum;
    }
    public get configRiskHostNum(): number | undefined {
        return this['config_risk_host_num'];
    }
    public withConfigRiskNum(configRiskNum: number): RiskHandleInfoBaseLineInfo {
        this['config_risk_num'] = configRiskNum;
        return this;
    }
    public set configRiskNum(configRiskNum: number  | undefined) {
        this['config_risk_num'] = configRiskNum;
    }
    public get configRiskNum(): number | undefined {
        return this['config_risk_num'];
    }
    public withPassedRate(passedRate: number): RiskHandleInfoBaseLineInfo {
        this['passed_rate'] = passedRate;
        return this;
    }
    public set passedRate(passedRate: number  | undefined) {
        this['passed_rate'] = passedRate;
    }
    public get passedRate(): number | undefined {
        return this['passed_rate'];
    }
    public withBeatRate(beatRate: number): RiskHandleInfoBaseLineInfo {
        this['beat_rate'] = beatRate;
        return this;
    }
    public set beatRate(beatRate: number  | undefined) {
        this['beat_rate'] = beatRate;
    }
    public get beatRate(): number | undefined {
        return this['beat_rate'];
    }
    public withWeakPwdNum(weakPwdNum: number): RiskHandleInfoBaseLineInfo {
        this['weak_pwd_num'] = weakPwdNum;
        return this;
    }
    public set weakPwdNum(weakPwdNum: number  | undefined) {
        this['weak_pwd_num'] = weakPwdNum;
    }
    public get weakPwdNum(): number | undefined {
        return this['weak_pwd_num'];
    }
    public withPassedNum(passedNum: number): RiskHandleInfoBaseLineInfo {
        this['passed_num'] = passedNum;
        return this;
    }
    public set passedNum(passedNum: number  | undefined) {
        this['passed_num'] = passedNum;
    }
    public get passedNum(): number | undefined {
        return this['passed_num'];
    }
    public withTotalConfigRiskNum(totalConfigRiskNum: number): RiskHandleInfoBaseLineInfo {
        this['total_config_risk_num'] = totalConfigRiskNum;
        return this;
    }
    public set totalConfigRiskNum(totalConfigRiskNum: number  | undefined) {
        this['total_config_risk_num'] = totalConfigRiskNum;
    }
    public get totalConfigRiskNum(): number | undefined {
        return this['total_config_risk_num'];
    }
    public withVersionRecommend(versionRecommend: string): RiskHandleInfoBaseLineInfo {
        this['version_recommend'] = versionRecommend;
        return this;
    }
    public set versionRecommend(versionRecommend: string  | undefined) {
        this['version_recommend'] = versionRecommend;
    }
    public get versionRecommend(): string | undefined {
        return this['version_recommend'];
    }
}