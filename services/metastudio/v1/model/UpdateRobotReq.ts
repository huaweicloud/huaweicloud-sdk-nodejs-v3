import { HuaweiEiCbs } from './HuaweiEiCbs';
import { IflytekAiuiConfig } from './IflytekAiuiConfig';
import { IflytekSpark } from './IflytekSpark';
import { LanguageEnum } from './LanguageEnum';
import { MobvoiConfig } from './MobvoiConfig';
import { RobotTypeEnum } from './RobotTypeEnum';
import { ThirdPartyModelConfig } from './ThirdPartyModelConfig';


export class UpdateRobotReq {
    public name?: string;
    private 'app_type'?: number;
    private 'room_id'?: string;
    private 'robot_type'?: RobotTypeEnum;
    public language?: LanguageEnum;
    private 'tail_silence_time'?: number;
    private 'enable_question_audit'?: boolean;
    private 'huawei_ei_cbs'?: HuaweiEiCbs;
    private 'iflytek_aiui_config'?: IflytekAiuiConfig;
    private 'iflytek_spark'?: IflytekSpark;
    private 'third_party_model_config'?: ThirdPartyModelConfig;
    private 'mobvoi_config'?: MobvoiConfig;
    public constructor() { 
    }
    public withName(name: string): UpdateRobotReq {
        this['name'] = name;
        return this;
    }
    public withAppType(appType: number): UpdateRobotReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: number  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): number | undefined {
        return this['app_type'];
    }
    public withRoomId(roomId: string): UpdateRobotReq {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRobotType(robotType: RobotTypeEnum): UpdateRobotReq {
        this['robot_type'] = robotType;
        return this;
    }
    public set robotType(robotType: RobotTypeEnum  | undefined) {
        this['robot_type'] = robotType;
    }
    public get robotType(): RobotTypeEnum | undefined {
        return this['robot_type'];
    }
    public withLanguage(language: LanguageEnum): UpdateRobotReq {
        this['language'] = language;
        return this;
    }
    public withTailSilenceTime(tailSilenceTime: number): UpdateRobotReq {
        this['tail_silence_time'] = tailSilenceTime;
        return this;
    }
    public set tailSilenceTime(tailSilenceTime: number  | undefined) {
        this['tail_silence_time'] = tailSilenceTime;
    }
    public get tailSilenceTime(): number | undefined {
        return this['tail_silence_time'];
    }
    public withEnableQuestionAudit(enableQuestionAudit: boolean): UpdateRobotReq {
        this['enable_question_audit'] = enableQuestionAudit;
        return this;
    }
    public set enableQuestionAudit(enableQuestionAudit: boolean  | undefined) {
        this['enable_question_audit'] = enableQuestionAudit;
    }
    public get enableQuestionAudit(): boolean | undefined {
        return this['enable_question_audit'];
    }
    public withHuaweiEiCbs(huaweiEiCbs: HuaweiEiCbs): UpdateRobotReq {
        this['huawei_ei_cbs'] = huaweiEiCbs;
        return this;
    }
    public set huaweiEiCbs(huaweiEiCbs: HuaweiEiCbs  | undefined) {
        this['huawei_ei_cbs'] = huaweiEiCbs;
    }
    public get huaweiEiCbs(): HuaweiEiCbs | undefined {
        return this['huawei_ei_cbs'];
    }
    public withIflytekAiuiConfig(iflytekAiuiConfig: IflytekAiuiConfig): UpdateRobotReq {
        this['iflytek_aiui_config'] = iflytekAiuiConfig;
        return this;
    }
    public set iflytekAiuiConfig(iflytekAiuiConfig: IflytekAiuiConfig  | undefined) {
        this['iflytek_aiui_config'] = iflytekAiuiConfig;
    }
    public get iflytekAiuiConfig(): IflytekAiuiConfig | undefined {
        return this['iflytek_aiui_config'];
    }
    public withIflytekSpark(iflytekSpark: IflytekSpark): UpdateRobotReq {
        this['iflytek_spark'] = iflytekSpark;
        return this;
    }
    public set iflytekSpark(iflytekSpark: IflytekSpark  | undefined) {
        this['iflytek_spark'] = iflytekSpark;
    }
    public get iflytekSpark(): IflytekSpark | undefined {
        return this['iflytek_spark'];
    }
    public withThirdPartyModelConfig(thirdPartyModelConfig: ThirdPartyModelConfig): UpdateRobotReq {
        this['third_party_model_config'] = thirdPartyModelConfig;
        return this;
    }
    public set thirdPartyModelConfig(thirdPartyModelConfig: ThirdPartyModelConfig  | undefined) {
        this['third_party_model_config'] = thirdPartyModelConfig;
    }
    public get thirdPartyModelConfig(): ThirdPartyModelConfig | undefined {
        return this['third_party_model_config'];
    }
    public withMobvoiConfig(mobvoiConfig: MobvoiConfig): UpdateRobotReq {
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