

export class ShowUserLoginProtectRequest {
    private 'user_id': string | undefined;
    public constructor(userId: any) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): ShowUserLoginProtectRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
}