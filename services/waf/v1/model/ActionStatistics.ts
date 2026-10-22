

export class ActionStatistics {
    private 'action_type'?: ActionStatisticsActionTypeEnum | string;
    public count?: number;
    public constructor(actionType?: string, count?: number) { 
        this['action_type'] = actionType;
        this['count'] = count;
    }
    public withActionType(actionType: ActionStatisticsActionTypeEnum | string): ActionStatistics {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: ActionStatisticsActionTypeEnum | string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): ActionStatisticsActionTypeEnum | string | undefined {
        return this['action_type'];
    }
    public withCount(count: number): ActionStatistics {
        this['count'] = count;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionStatisticsActionTypeEnum {
    ALLOW = 'ALLOW',
    BLOCK = 'BLOCK',
    OBSERVE = 'OBSERVE',
    MASK = 'MASK',
    SAFE_ANSWER = 'SAFE_ANSWER'
}
