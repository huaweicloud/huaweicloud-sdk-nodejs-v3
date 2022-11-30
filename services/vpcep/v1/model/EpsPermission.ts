

export class EpsPermission {
    public id?: string;
    public permission?: string;
    public description?: string;
    private 'created_at'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): EpsPermission {
        this['id'] = id;
        return this;
    }
    public withPermission(permission: string): EpsPermission {
        this['permission'] = permission;
        return this;
    }
    public withDescription(description: string): EpsPermission {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): EpsPermission {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
}