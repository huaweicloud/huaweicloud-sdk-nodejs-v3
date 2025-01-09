import { ResendEmailReq } from './ResendEmailReq';


export class SendEmailRequest {
    private 'user_id'?: string;
    public body?: ResendEmailReq;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): SendEmailRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: ResendEmailReq): SendEmailRequest {
        this['body'] = body;
        return this;
    }
}