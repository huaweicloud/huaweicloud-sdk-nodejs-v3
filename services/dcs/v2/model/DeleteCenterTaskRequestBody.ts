

export class DeleteCenterTaskRequestBody {
    public message?: string;
    public constructor() { 
    }
    public withMessage(message: string): DeleteCenterTaskRequestBody {
        this['message'] = message;
        return this;
    }
}