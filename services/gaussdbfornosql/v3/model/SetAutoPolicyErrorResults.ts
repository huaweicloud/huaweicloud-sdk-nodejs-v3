

export class SetAutoPolicyErrorResults {
    private 'instance_id'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): SetAutoPolicyErrorResults {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withErrorMessage(errorMessage: string): SetAutoPolicyErrorResults {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}