

export class ActionsList {
    public confidence: number;
    public action: number;
    public constructor(confidence?: any, action?: any) { 
        this['confidence'] = confidence;
        this['action'] = action;
    }
    public withConfidence(confidence: number): ActionsList {
        this['confidence'] = confidence;
        return this;
    }
    public withAction(action: number): ActionsList {
        this['action'] = action;
        return this;
    }
}