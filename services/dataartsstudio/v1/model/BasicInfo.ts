

export class BasicInfo {
    public owner?: string;
    public priority?: number;
    private 'execute_user'?: string;
    private 'instance_timeout'?: number;
    private 'custom_fields'?: object;
    public constructor() { 
    }
    public withOwner(owner: string): BasicInfo {
        this['owner'] = owner;
        return this;
    }
    public withPriority(priority: number): BasicInfo {
        this['priority'] = priority;
        return this;
    }
    public withExecuteUser(executeUser: string): BasicInfo {
        this['execute_user'] = executeUser;
        return this;
    }
    public set executeUser(executeUser: string  | undefined) {
        this['execute_user'] = executeUser;
    }
    public get executeUser(): string | undefined {
        return this['execute_user'];
    }
    public withInstanceTimeout(instanceTimeout: number): BasicInfo {
        this['instance_timeout'] = instanceTimeout;
        return this;
    }
    public set instanceTimeout(instanceTimeout: number  | undefined) {
        this['instance_timeout'] = instanceTimeout;
    }
    public get instanceTimeout(): number | undefined {
        return this['instance_timeout'];
    }
    public withCustomFields(customFields: object): BasicInfo {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: object  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): object | undefined {
        return this['custom_fields'];
    }
}