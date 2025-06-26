

export class ListSessionByUserNameRequest {
    private 'user_name'?: string;
    public constructor(userName?: string) { 
        this['user_name'] = userName;
    }
    public withUserName(userName: string): ListSessionByUserNameRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}