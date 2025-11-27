

export class ClusterGroupCondition {
    public type?: string;
    public status?: string;
    public reason?: string;
    public message?: string;
    public lastTransitionTime?: Date;
    public constructor() { 
    }
    public withType(type: string): ClusterGroupCondition {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ClusterGroupCondition {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ClusterGroupCondition {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): ClusterGroupCondition {
        this['message'] = message;
        return this;
    }
    public withLastTransitionTime(lastTransitionTime: Date): ClusterGroupCondition {
        this['lastTransitionTime'] = lastTransitionTime;
        return this;
    }
}