

export class EndpointPermission {
    public id?: string;
    public permission?: string;
    private 'created_at'?: Date;
    public constructor(id?: string, permission?: string, createdAt?: Date) { 
        this['id'] = id;
        this['permission'] = permission;
        this['created_at'] = createdAt;
    }
    public withId(id: string): EndpointPermission {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: string): EndpointPermission {
        this['permission'] = permission;
        return this;
    }
    public withCreatedAt(createdAt: Date): EndpointPermission {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}