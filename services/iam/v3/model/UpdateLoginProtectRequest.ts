import { UpdateLoginProjectReq } from './UpdateLoginProjectReq';


export class UpdateLoginProtectRequest {
    private 'user_id': string | undefined;
    public body?: UpdateLoginProjectReq;
    public constructor(userId: any) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): UpdateLoginProtectRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withBody(body: UpdateLoginProjectReq): UpdateLoginProtectRequest {
        this['body'] = body;
        return this;
    }
}