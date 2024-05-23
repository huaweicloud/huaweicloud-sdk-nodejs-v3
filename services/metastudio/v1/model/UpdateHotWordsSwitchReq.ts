

export class UpdateHotWordsSwitchReq {
    private 'robot_id'?: string;
    private 'enable_hot_words'?: boolean;
    public constructor(robotId?: string, enableHotWords?: boolean) { 
        this['robot_id'] = robotId;
        this['enable_hot_words'] = enableHotWords;
    }
    public withRobotId(robotId: string): UpdateHotWordsSwitchReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withEnableHotWords(enableHotWords: boolean): UpdateHotWordsSwitchReq {
        this['enable_hot_words'] = enableHotWords;
        return this;
    }
    public set enableHotWords(enableHotWords: boolean  | undefined) {
        this['enable_hot_words'] = enableHotWords;
    }
    public get enableHotWords(): boolean | undefined {
        return this['enable_hot_words'];
    }
}