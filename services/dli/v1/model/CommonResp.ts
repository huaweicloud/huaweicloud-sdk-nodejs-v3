

export class CommonResp {
    private 'is_success'?: boolean;
    public message?: string;
    public constructor() { 
    }
    public withIsSuccess(isSuccess: boolean): CommonResp {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CommonResp {
        this['message'] = message;
        return this;
    }
}