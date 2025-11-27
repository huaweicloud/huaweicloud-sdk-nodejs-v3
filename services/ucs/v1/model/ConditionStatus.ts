

export class ConditionStatus {
    public type?: string;
    public status?: string;
    public observedgeneration?: number;
    public lastTransitionTime?: Date;
    public reason?: string;
    public message?: string;
    public constructor() { 
    }
    public withType(type: string): ConditionStatus {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ConditionStatus {
        this['status'] = status;
        return this;
    }
    public withObservedgeneration(observedgeneration: number): ConditionStatus {
        this['observedgeneration'] = observedgeneration;
        return this;
    }
    public withLastTransitionTime(lastTransitionTime: Date): ConditionStatus {
        this['lastTransitionTime'] = lastTransitionTime;
        return this;
    }
    public withReason(reason: string): ConditionStatus {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): ConditionStatus {
        this['message'] = message;
        return this;
    }
}