

export class AppDeleteResult {
    private 'application_id'?: string;
    private 'application_name'?: string;
    public status?: AppDeleteResultStatusEnum | string;
    private 'error_reason'?: string;
    public constructor() { 
    }
    public withApplicationId(applicationId: string): AppDeleteResult {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withApplicationName(applicationName: string): AppDeleteResult {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withStatus(status: AppDeleteResultStatusEnum | string): AppDeleteResult {
        this['status'] = status;
        return this;
    }
    public withErrorReason(errorReason: string): AppDeleteResult {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: string  | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason(): string | undefined {
        return this['error_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppDeleteResultStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
