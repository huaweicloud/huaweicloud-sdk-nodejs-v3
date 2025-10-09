import { UpdateUserReqBody } from './UpdateUserReqBody';


export class UpdateUserV5Request {
    private 'user_id'?: string;
    public body?: UpdateUserReqBody;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): UpdateUserV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: UpdateUserReqBody): UpdateUserV5Request {
        this['body'] = body;
        return this;
    }
}