

export class FailureDetailsMessage {
    public message?: string;
    public constructor(message?: string) { 
        this['message'] = message;
    }
    public withMessage(message: string): FailureDetailsMessage {
        this['message'] = message;
        return this;
    }
}