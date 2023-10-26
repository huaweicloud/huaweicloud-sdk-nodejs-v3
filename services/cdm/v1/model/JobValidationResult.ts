

export class JobValidationResult {
    public message?: string;
    public status?: JobValidationResultStatusEnum | string;
    public constructor() { 
    }
    public withMessage(message: string): JobValidationResult {
        this['message'] = message;
        return this;
    }
    public withStatus(status: JobValidationResultStatusEnum | string): JobValidationResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobValidationResultStatusEnum {
    ERROR = 'ERROR',
    WARNING = 'WARNING'
}
