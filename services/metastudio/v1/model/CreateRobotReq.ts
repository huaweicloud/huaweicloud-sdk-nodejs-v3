import { HuaweiEiCbs } from './HuaweiEiCbs';
import { IflytekAiuiConfig } from './IflytekAiuiConfig';
import { IflytekSpark } from './IflytekSpark';


export class CreateRobotReq {
    public name?: string;
    private 'app_type'?: number;
    public concurrency?: number;
    private 'huawei_ei_cbs'?: HuaweiEiCbs;
    private 'iflytek_aiui_config'?: IflytekAiuiConfig;
    private 'iflytek_spark'?: IflytekSpark;
    public constructor(name?: string, appType?: number, concurrency?: number) { 
        this['name'] = name;
        this['app_type'] = appType;
        this['concurrency'] = concurrency;
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
    public withConcurrency(concurrency: number): CreateRobotReq {
        this['concurrency'] = concurrency;
        return this;
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
}