

export class AssignModelInfo {
    private 'assign_dimension'?: AssignModelInfoAssignDimensionEnum | string;
    private 'priority_strategy'?: AssignModelInfoPriorityStrategyEnum | string;
    private 'desktop_assigin_user_num'?: number;
    private 'user_assigin_desktop_num'?: number;
    private 'desktop_name_policy_id'?: string;
    public constructor() { 
    }
    public withAssignDimension(assignDimension: AssignModelInfoAssignDimensionEnum | string): AssignModelInfo {
        this['assign_dimension'] = assignDimension;
        return this;
    }
    public set assignDimension(assignDimension: AssignModelInfoAssignDimensionEnum | string  | undefined) {
        this['assign_dimension'] = assignDimension;
    }
    public get assignDimension(): AssignModelInfoAssignDimensionEnum | string | undefined {
        return this['assign_dimension'];
    }
    public withPriorityStrategy(priorityStrategy: AssignModelInfoPriorityStrategyEnum | string): AssignModelInfo {
        this['priority_strategy'] = priorityStrategy;
        return this;
    }
    public set priorityStrategy(priorityStrategy: AssignModelInfoPriorityStrategyEnum | string  | undefined) {
        this['priority_strategy'] = priorityStrategy;
    }
    public get priorityStrategy(): AssignModelInfoPriorityStrategyEnum | string | undefined {
        return this['priority_strategy'];
    }
    public withDesktopAssiginUserNum(desktopAssiginUserNum: number): AssignModelInfo {
        this['desktop_assigin_user_num'] = desktopAssiginUserNum;
        return this;
    }
    public set desktopAssiginUserNum(desktopAssiginUserNum: number  | undefined) {
        this['desktop_assigin_user_num'] = desktopAssiginUserNum;
    }
    public get desktopAssiginUserNum(): number | undefined {
        return this['desktop_assigin_user_num'];
    }
    public withUserAssiginDesktopNum(userAssiginDesktopNum: number): AssignModelInfo {
        this['user_assigin_desktop_num'] = userAssiginDesktopNum;
        return this;
    }
    public set userAssiginDesktopNum(userAssiginDesktopNum: number  | undefined) {
        this['user_assigin_desktop_num'] = userAssiginDesktopNum;
    }
    public get userAssiginDesktopNum(): number | undefined {
        return this['user_assigin_desktop_num'];
    }
    public withDesktopNamePolicyId(desktopNamePolicyId: string): AssignModelInfo {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
        return this;
    }
    public set desktopNamePolicyId(desktopNamePolicyId: string  | undefined) {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
    }
    public get desktopNamePolicyId(): string | undefined {
        return this['desktop_name_policy_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssignModelInfoAssignDimensionEnum {
    USER = 'USER',
    DESKTOP = 'DESKTOP'
}
/**
    * @export
    * @enum {string}
    */
export enum AssignModelInfoPriorityStrategyEnum {
    USER_NO_DESKTOP = 'USER_NO_DESKTOP',
    USER_FIXED_DESKTOP_NUM = 'USER_FIXED_DESKTOP_NUM',
    DESKTOP_ASSIGN_USER_PRIORITY = 'DESKTOP_ASSIGN_USER_PRIORITY',
    DESKTOP_ASSIGN_FIXED_USER = 'DESKTOP_ASSIGN_FIXED_USER',
    DESKTOP_ASSIGN_USERS_OR_GROUPS = 'DESKTOP_ASSIGN_USERS_OR_GROUPS',
    FIXED_RELATION = 'FIXED_RELATION'
}
