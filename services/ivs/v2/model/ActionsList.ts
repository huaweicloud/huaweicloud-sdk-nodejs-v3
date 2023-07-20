

export class ActionsList {
    public confidence?: number;
    public action?: number;
    public constructor(confidence?: number, action?: number) { 
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