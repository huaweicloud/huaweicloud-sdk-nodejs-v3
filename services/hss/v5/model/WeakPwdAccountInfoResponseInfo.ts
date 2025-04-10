

export class WeakPwdAccountInfoResponseInfo {
    private 'user_name'?: string;
    private 'service_type'?: string;
    public duration?: number;
    private 'desensitized_weak_passwords'?: string;
    public suggestion?: string;
    public constructor() { 
    }
    public withUserName(userName: string): WeakPwdAccountInfoResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withServiceType(serviceType: string): WeakPwdAccountInfoResponseInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withDuration(duration: number): WeakPwdAccountInfoResponseInfo {
        this['duration'] = duration;
        return this;
    }
    public withDesensitizedWeakPasswords(desensitizedWeakPasswords: string): WeakPwdAccountInfoResponseInfo {
        this['desensitized_weak_passwords'] = desensitizedWeakPasswords;
        return this;
    }
    public set desensitizedWeakPasswords(desensitizedWeakPasswords: string  | undefined) {
        this['desensitized_weak_passwords'] = desensitizedWeakPasswords;
    }
    public get desensitizedWeakPasswords(): string | undefined {
        return this['desensitized_weak_passwords'];
    }
    public withSuggestion(suggestion: string): WeakPwdAccountInfoResponseInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}