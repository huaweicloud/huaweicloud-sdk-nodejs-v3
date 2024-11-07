import { HuaweiEiCbs } from './HuaweiEiCbs';
import { IflytekAiuiConfig } from './IflytekAiuiConfig';
import { IflytekSpark } from './IflytekSpark';
import { MobvoiConfig } from './MobvoiConfig';
import { ThirdPartyModelConfig } from './ThirdPartyModelConfig';


export class ValidateRobotReq {
    private 'app_type'?: number;
    private 'huawei_ei_cbs'?: HuaweiEiCbs;
    private 'iflytek_aiui_config'?: IflytekAiuiConfig;
    private 'iflytek_spark'?: IflytekSpark;
    private 'third_party_model_config'?: ThirdPartyModelConfig;
    private 'mobvoi_config'?: MobvoiConfig;
    public constructor() { 
    }
    public withAppType(appType: number): ValidateRobotReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: number  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): number | undefined {
        return this['app_type'];
    }
    public withHuaweiEiCbs(huaweiEiCbs: HuaweiEiCbs): ValidateRobotReq {
        this['huawei_ei_cbs'] = huaweiEiCbs;
        return this;
    }
    public set huaweiEiCbs(huaweiEiCbs: HuaweiEiCbs  | undefined) {
        this['huawei_ei_cbs'] = huaweiEiCbs;
    }
    public get huaweiEiCbs(): HuaweiEiCbs | undefined {
        return this['huawei_ei_cbs'];
    }
    public withIflytekAiuiConfig(iflytekAiuiConfig: IflytekAiuiConfig): ValidateRobotReq {
        this['iflytek_aiui_config'] = iflytekAiuiConfig;
        return this;
    }
    public set iflytekAiuiConfig(iflytekAiuiConfig: IflytekAiuiConfig  | undefined) {
        this['iflytek_aiui_config'] = iflytekAiuiConfig;
    }
    public get iflytekAiuiConfig(): IflytekAiuiConfig | undefined {
        return this['iflytek_aiui_config'];
    }
    public withIflytekSpark(iflytekSpark: IflytekSpark): ValidateRobotReq {
        this['iflytek_spark'] = iflytekSpark;
        return this;
    }
    public set iflytekSpark(iflytekSpark: IflytekSpark  | undefined) {
        this['iflytek_spark'] = iflytekSpark;
    }
    public get iflytekSpark(): IflytekSpark | undefined {
        return this['iflytek_spark'];
    }
    public withThirdPartyModelConfig(thirdPartyModelConfig: ThirdPartyModelConfig): ValidateRobotReq {
        this['third_party_model_config'] = thirdPartyModelConfig;
        return this;
    }
    public set thirdPartyModelConfig(thirdPartyModelConfig: ThirdPartyModelConfig  | undefined) {
        this['third_party_model_config'] = thirdPartyModelConfig;
    }
    public get thirdPartyModelConfig(): ThirdPartyModelConfig | undefined {
        return this['third_party_model_config'];
    }
    public withMobvoiConfig(mobvoiConfig: MobvoiConfig): ValidateRobotReq {
        this['mobvoi_config'] = mobvoiConfig;
        return this;
    }
    public set mobvoiConfig(mobvoiConfig: MobvoiConfig  | undefined) {
        this['mobvoi_config'] = mobvoiConfig;
    }
    public get mobvoiConfig(): MobvoiConfig | undefined {
        return this['mobvoi_config'];
    }
}