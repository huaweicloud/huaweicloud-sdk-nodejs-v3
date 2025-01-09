import { EditUserReq } from './EditUserReq';


export class UpdateUserInfoRequest {
    private 'user_id'?: string;
    public body?: EditUserReq;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): UpdateUserInfoRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: EditUserReq): UpdateUserInfoRequest {
        this['body'] = body;
        return this;
    }
}