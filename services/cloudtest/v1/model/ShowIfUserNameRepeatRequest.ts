

export class ShowIfUserNameRepeatRequest {
    private 'service_id'?: string;
    public userId?: string;
    public userName?: string;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ShowIfUserNameRepeatRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withUserId(userId: string): ShowIfUserNameRepeatRequest {
        this['userId'] = userId;
        return this;
    }
    public withUserName(userName: string): ShowIfUserNameRepeatRequest {
        this['userName'] = userName;
        return this;
    }
}