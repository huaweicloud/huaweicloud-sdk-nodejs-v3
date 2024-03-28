

export class SuccessResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public constructor() { 
    }
    public withIsSuccess(isSuccess: boolean): SuccessResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): SuccessResponse {
        this['message'] = message;
        return this;
    }
}