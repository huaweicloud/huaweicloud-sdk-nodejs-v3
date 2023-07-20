

export class Annotations {
    public message?: string;
    private 'log_info'?: string;
    private 'current_value'?: string;
    private 'old_annotations'?: string;
    public constructor(message?: string, logInfo?: string, currentValue?: string, oldAnnotations?: string) { 
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
    public set logInfo(logInfo: string  | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo(): string | undefined {
        return this['log_info'];
    }
    public withCurrentValue(currentValue: string): Annotations {
        this['current_value'] = currentValue;
        return this;
    }
    public set currentValue(currentValue: string  | undefined) {
        this['current_value'] = currentValue;
    }
    public get currentValue(): string | undefined {
        return this['current_value'];
    }
    public withOldAnnotations(oldAnnotations: string): Annotations {
        this['old_annotations'] = oldAnnotations;
        return this;
    }
    public set oldAnnotations(oldAnnotations: string  | undefined) {
        this['old_annotations'] = oldAnnotations;
    }
    public get oldAnnotations(): string | undefined {
        return this['old_annotations'];
    }
}