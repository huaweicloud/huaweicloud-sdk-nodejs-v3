

export class NodePoolCondition {
    public type?: NodePoolConditionTypeEnum | string;
    public status?: string;
    public lastProbeTime?: string;
    public lastTransitTime?: string;
    public reason?: string;
    public message?: string;
    public constructor() { 
    }
    public withType(type: NodePoolConditionTypeEnum | string): NodePoolCondition {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): NodePoolCondition {
        this['status'] = status;
        return this;
    }
    public withLastProbeTime(lastProbeTime: string): NodePoolCondition {
        this['lastProbeTime'] = lastProbeTime;
        return this;
    }
    public withLastTransitTime(lastTransitTime: string): NodePoolCondition {
        this['lastTransitTime'] = lastTransitTime;
        return this;
    }
    public withReason(reason: string): NodePoolCondition {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): NodePoolCondition {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodePoolConditionTypeEnum {
    TAINTSYNCHRONIZING = 'TaintSynchronizing',
    LABELSYNCHRONIZING = 'LabelSynchronizing',
    USERTAGSSYNCHRONIZING = 'UserTagsSynchronizing',
    CONFIGURATIONSYNCHRONIZING = 'ConfigurationSynchronizing',
    SCALABLE = 'Scalable',
    QUOTAINSUFFICIENT = 'QuotaInsufficient',
    RESOURCEINSUFFICIENT = 'ResourceInsufficient',
    UNEXPECTEDERROR = 'UnexpectedError',
    LOCKEDBYORDER = 'LockedByOrder',
    ERROR = 'Error'
}
