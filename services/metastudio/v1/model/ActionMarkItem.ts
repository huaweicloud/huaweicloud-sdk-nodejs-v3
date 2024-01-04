

export class ActionMarkItem {
    private 'action_start_time'?: string;
    private 'action_end_time'?: string;
    private 'action_type'?: ActionMarkItemActionTypeEnum | string;
    public constructor() { 
    }
    public withActionStartTime(actionStartTime: string): ActionMarkItem {
        this['action_start_time'] = actionStartTime;
        return this;
    }
    public set actionStartTime(actionStartTime: string  | undefined) {
        this['action_start_time'] = actionStartTime;
    }
    public get actionStartTime(): string | undefined {
        return this['action_start_time'];
    }
    public withActionEndTime(actionEndTime: string): ActionMarkItem {
        this['action_end_time'] = actionEndTime;
        return this;
    }
    public set actionEndTime(actionEndTime: string  | undefined) {
        this['action_end_time'] = actionEndTime;
    }
    public get actionEndTime(): string | undefined {
        return this['action_end_time'];
    }
    public withActionType(actionType: ActionMarkItemActionTypeEnum | string): ActionMarkItem {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: ActionMarkItemActionTypeEnum | string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): ActionMarkItemActionTypeEnum | string | undefined {
        return this['action_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionMarkItemActionTypeEnum {
    SILENCE = 'SILENCE',
    ACTION = 'ACTION'
}
