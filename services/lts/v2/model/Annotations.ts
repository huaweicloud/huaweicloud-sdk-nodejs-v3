

export class Annotations {
    public message: string;
    private 'log_info': string | undefined;
    private 'current_value': string | undefined;
    private 'old_annotations': string | undefined;
    public constructor(message?: any, logInfo?: any, currentValue?: any, oldAnnotations?: any) { 
        this['message'] = message;
        this['log_info'] = logInfo;
        this['current_value'] = currentValue;
        this['old_annotations'] = oldAnnotations;
    }
    public withMessage(message: string): Annotations {
        this['message'] = message;
        return this;
    }
    public withLogInfo(logInfo: string): Annotations {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: string | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo() {
        return this['log_info'];
    }
    public withCurrentValue(currentValue: string): Annotations {
        this['current_value'] = currentValue;
        return this;
    }
    public set currentValue(currentValue: string | undefined) {
        this['current_value'] = currentValue;
    }
    public get currentValue() {
        return this['current_value'];
    }
    public withOldAnnotations(oldAnnotations: string): Annotations {
        this['old_annotations'] = oldAnnotations;
        return this;
    }
    public set oldAnnotations(oldAnnotations: string | undefined) {
        this['old_annotations'] = oldAnnotations;
    }
    public get oldAnnotations() {
        return this['old_annotations'];
    }
}