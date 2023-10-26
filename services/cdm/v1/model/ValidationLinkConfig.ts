

export class ValidationLinkConfig {
    public message?: string;
    public status?: ValidationLinkConfigStatusEnum | string;
    public constructor() { 
    }
    public withMessage(message: string): ValidationLinkConfig {
        this['message'] = message;
        return this;
    }
    public withStatus(status: ValidationLinkConfigStatusEnum | string): ValidationLinkConfig {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidationLinkConfigStatusEnum {
    ERROR = 'ERROR',
    WARNING = 'WARNING'
}
