import { CreateLoginProfileReqBody } from './CreateLoginProfileReqBody';


export class CreateLoginProfileV5Request {
    private 'user_id'?: string;
    public body?: CreateLoginProfileReqBody;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): CreateLoginProfileV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: CreateLoginProfileReqBody): CreateLoginProfileV5Request {
        this['body'] = body;
        return this;
    }
}