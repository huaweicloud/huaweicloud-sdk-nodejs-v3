

export class GrantQueuePermissionReq {
    private 'queue_name'?: string;
    private 'user_name'?: string;
    public action?: string;
    public privileges?: Array<string>;
    public constructor(queueName?: string, userName?: string, action?: string, privileges?: Array<string>) { 
        this['queue_name'] = queueName;
        this['user_name'] = userName;
        this['action'] = action;
        this['privileges'] = privileges;
    }
    public withQueueName(queueName: string): GrantQueuePermissionReq {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withUserName(userName: string): GrantQueuePermissionReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAction(action: string): GrantQueuePermissionReq {
        this['action'] = action;
        return this;
    }
    public withPrivileges(privileges: Array<string>): GrantQueuePermissionReq {
        this['privileges'] = privileges;
        return this;
    }
}