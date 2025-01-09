import { OperateUserReq } from './OperateUserReq';


export class ChangeUserStatusRequest {
    private 'user_id'?: string;
    public body?: OperateUserReq;
    public constructor(userId?: string) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): ChangeUserStatusRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: OperateUserReq): ChangeUserStatusRequest {
        this['body'] = body;
        return this;
    }
}