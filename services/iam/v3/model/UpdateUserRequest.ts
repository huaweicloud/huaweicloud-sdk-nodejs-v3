import { UpdateUserRequestBody } from './UpdateUserRequestBody';


export class UpdateUserRequest {
    private 'user_id'?: string;
    public body?: UpdateUserRequestBody;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): UpdateUserRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: UpdateUserRequestBody): UpdateUserRequest {
        this['body'] = body;
        return this;
    }
}