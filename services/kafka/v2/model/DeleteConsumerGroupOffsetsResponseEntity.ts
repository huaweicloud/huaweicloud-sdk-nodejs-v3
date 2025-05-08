

export class DeleteConsumerGroupOffsetsResponseEntity {
    public name?: string;
    public success?: boolean;
    private 'error_code'?: string;
    public constructor(name?: string, success?: boolean) { 
        this['name'] = name;
        this['success'] = success;
    }
    public withName(name: string): DeleteConsumerGroupOffsetsResponseEntity {
        this['name'] = name;
        return this;
    }
    public withSuccess(success: boolean): DeleteConsumerGroupOffsetsResponseEntity {
        this['success'] = success;
        return this;
    }
    public withErrorCode(errorCode: string): DeleteConsumerGroupOffsetsResponseEntity {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}