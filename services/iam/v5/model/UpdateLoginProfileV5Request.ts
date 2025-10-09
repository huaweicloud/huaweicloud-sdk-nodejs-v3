import { UpdateLoginProfileReqBody } from './UpdateLoginProfileReqBody';


export class UpdateLoginProfileV5Request {
    private 'user_id'?: string;
    public body?: UpdateLoginProfileReqBody;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): UpdateLoginProfileV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: UpdateLoginProfileReqBody): UpdateLoginProfileV5Request {
        this['body'] = body;
        return this;
    }
}