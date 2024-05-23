import { HuaweiEiCbs } from './HuaweiEiCbs';
import { IflytekAiuiConfig } from './IflytekAiuiConfig';
import { IflytekSpark } from './IflytekSpark';
import { LanguageEnum } from './LanguageEnum';
import { MobvoiConfig } from './MobvoiConfig';
import { ThirdPartyModelConfig } from './ThirdPartyModelConfig';


export class CreateRobotReq {
    public name?: string;
    private 'app_type'?: number;
    private 'room_id'?: string;
    public language?: LanguageEnum;
    private 'tail_silence_time'?: number;
    private 'huawei_ei_cbs'?: HuaweiEiCbs;
    private 'iflytek_aiui_config'?: IflytekAiuiConfig;
    private 'iflytek_spark'?: IflytekSpark;
    private 'third_party_model_config'?: ThirdPartyModelConfig;
    private 'mobvoi_config'?: MobvoiConfig;
    public constructor(name?: string, appType?: number) { 
        this['name'] = name;
        this['app_type'] = appType;
    }
    public withName(name: string): CreateRobotReq {
        this['name'] = name;
        return this;
    }
    public withAppType(appType: number): CreateRobotReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: number  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): number | undefined {
        return this['app_type'];
    }
    public withRoomId(roomId: string): CreateRobotReq {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withLanguage(language: LanguageEnum): CreateRobotReq {
        this['language'] = language;
        return this;
    }
    public withTailSilenceTime(tailSilenceTime: number): CreateRobotReq {
        this['tail_silence_time'] = tailSilenceTime;
        return this;
    }
    public set tailSilenceTime(tailSilenceTime: number  | undefined) {
        this['tail_silence_time'] = tailSilenceTime;
    }
    public get tailSilenceTime(): number | undefined {
        return this['tail_silence_time'];
    }
    public withHuaweiEiCbs(huaweiEiCbs: HuaweiEiCbs): CreateRobotReq {
        this['huawei_ei_cbs'] = huaweiEiCbs;
        return this;
    }
    public set huaweiEiCbs(huaweiEiCbs: HuaweiEiCbs  | undefined) {
        this['huawei_ei_cbs'] = huaweiEiCbs;
    }
    public get huaweiEiCbs(): HuaweiEiCbs | undefined {
        return this['huawei_ei_cbs'];
    }
    public withIflytekAiuiConfig(iflytekAiuiConfig: IflytekAiuiConfig): CreateRobotReq {
        this['iflytek_aiui_config'] = iflytekAiuiConfig;
        return this;
    }
    public set iflytekAiuiConfig(iflytekAiuiConfig: IflytekAiuiConfig  | undefined) {
        this['iflytek_aiui_config'] = iflytekAiuiConfig;
    }
    public get iflytekAiuiConfig(): IflytekAiuiConfig | undefined {
        return this['iflytek_aiui_config'];
    }
    public withIflytekSpark(iflytekSpark: IflytekSpark): CreateRobotReq {
        this['iflytek_spark'] = iflytekSpark;
        return this;
    }
    public set iflytekSpark(iflytekSpark: IflytekSpark  | undefined) {
        this['iflytek_spark'] = iflytekSpark;
    }
    public get iflytekSpark(): IflytekSpark | undefined {
        return this['iflytek_spark'];
    }
    public withThirdPartyModelConfig(thirdPartyModelConfig: ThirdPartyModelConfig): CreateRobotReq {
        this['third_party_model_config'] = thirdPartyModelConfig;
        return this;
    }
    public set thirdPartyModelConfig(thirdPartyModelConfig: ThirdPartyModelConfig  | undefined) {
        this['third_party_model_config'] = thirdPartyModelConfig;
    }
    public get thirdPartyModelConfig(): ThirdPartyModelConfig | undefined {
        return this['third_party_model_config'];
    }
    public withMobvoiConfig(mobvoiConfig: MobvoiConfig): CreateRobotReq {
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