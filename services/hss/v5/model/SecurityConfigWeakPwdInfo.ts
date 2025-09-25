

export class SecurityConfigWeakPwdInfo {
    private 'user_name'?: string;
    private 'service_type'?: string;
    public duration?: number;
    public constructor() { 
    }
    public withUserName(userName: string): SecurityConfigWeakPwdInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withServiceType(serviceType: string): SecurityConfigWeakPwdInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withDuration(duration: number): SecurityConfigWeakPwdInfo {
        this['duration'] = duration;
        return this;
    }
}