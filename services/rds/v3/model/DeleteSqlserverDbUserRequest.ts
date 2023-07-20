

export class DeleteSqlserverDbUserRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'user_name'?: string;
    public constructor(instanceId?: string, userName?: string) { 
        this['instance_id'] = instanceId;
        this['user_name'] = userName;
    }
    public withXLanguage(xLanguage: string): DeleteSqlserverDbUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteSqlserverDbUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): DeleteSqlserverDbUserRequest {
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