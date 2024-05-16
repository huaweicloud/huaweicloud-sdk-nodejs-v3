

export class UpdateWelcomeSpeechSwitchReq {
    private 'robot_id'?: string;
    private 'enable_welcome_speech'?: boolean;
    public constructor(robotId?: string, enableWelcomeSpeech?: boolean) { 
        this['robot_id'] = robotId;
        this['enable_welcome_speech'] = enableWelcomeSpeech;
    }
    public withRobotId(robotId: string): UpdateWelcomeSpeechSwitchReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withEnableWelcomeSpeech(enableWelcomeSpeech: boolean): UpdateWelcomeSpeechSwitchReq {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
        return this;
    }
    public set enableWelcomeSpeech(enableWelcomeSpeech: boolean  | undefined) {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
    }
    public get enableWelcomeSpeech(): boolean | undefined {
        return this['enable_welcome_speech'];
    }
}