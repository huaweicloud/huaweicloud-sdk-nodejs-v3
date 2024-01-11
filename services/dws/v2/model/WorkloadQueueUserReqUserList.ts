

export class WorkloadQueueUserReqUserList {
    private 'user_name'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): WorkloadQueueUserReqUserList {
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