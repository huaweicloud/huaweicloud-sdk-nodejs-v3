

export class AuditLog {
    public id?: number;
    public operation?: string;
    private 'resource_type'?: string;
    public resource?: string;
    public username?: string;
    private 'op_time'?: string;
    public constructor() { 
    }
    public withId(id: number): AuditLog {
        this['id'] = id;
        return this;
    }
    public withOperation(operation: string): AuditLog {
        this['operation'] = operation;
        return this;
    }
    public withResourceType(resourceType: string): AuditLog {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResource(resource: string): AuditLog {
        this['resource'] = resource;
        return this;
    }
    public withUsername(username: string): AuditLog {
        this['username'] = username;
        return this;
    }
    public withOpTime(opTime: string): AuditLog {
        this['op_time'] = opTime;
        return this;
    }
    public set opTime(opTime: string  | undefined) {
        this['op_time'] = opTime;
    }
    public get opTime(): string | undefined {
        return this['op_time'];
    }
}