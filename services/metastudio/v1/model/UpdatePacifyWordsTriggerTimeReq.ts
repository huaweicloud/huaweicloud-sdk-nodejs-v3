import { LanguageEnum } from './LanguageEnum';


export class UpdatePacifyWordsTriggerTimeReq {
    private 'robot_id'?: string;
    public language?: LanguageEnum;
    private 'trigger_time'?: number;
    public constructor(robotId?: string, language?: LanguageEnum, triggerTime?: number) { 
        this['robot_id'] = robotId;
        this['language'] = language;
        this['trigger_time'] = triggerTime;
    }
    public withRobotId(robotId: string): UpdatePacifyWordsTriggerTimeReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withLanguage(language: LanguageEnum): UpdatePacifyWordsTriggerTimeReq {
        this['language'] = language;
        return this;
    }
    public withTriggerTime(triggerTime: number): UpdatePacifyWordsTriggerTimeReq {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: number  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): number | undefined {
        return this['trigger_time'];
    }
}