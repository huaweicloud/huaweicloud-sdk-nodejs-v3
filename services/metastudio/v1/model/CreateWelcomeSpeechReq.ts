

export class CreateWelcomeSpeechReq {
    private 'robot_id'?: string;
    private 'welcome_speech'?: string;
    public constructor(robotId?: string, welcomeSpeech?: string) { 
        this['robot_id'] = robotId;
        this['welcome_speech'] = welcomeSpeech;
    }
    public withRobotId(robotId: string): CreateWelcomeSpeechReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withWelcomeSpeech(welcomeSpeech: string): CreateWelcomeSpeechReq {
        this['welcome_speech'] = welcomeSpeech;
        return this;
    }
    public set welcomeSpeech(welcomeSpeech: string  | undefined) {
        this['welcome_speech'] = welcomeSpeech;
    }
    public get welcomeSpeech(): string | undefined {
        return this['welcome_speech'];
    }
}