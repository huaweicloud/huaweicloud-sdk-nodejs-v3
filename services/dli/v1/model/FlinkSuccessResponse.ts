

export class FlinkSuccessResponse {
    private 'is_success'?: string;
    public message?: string;
    public constructor() { 
    }
    public withIsSuccess(isSuccess: string): FlinkSuccessResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): FlinkSuccessResponse {
        this['message'] = message;
        return this;
    }
}