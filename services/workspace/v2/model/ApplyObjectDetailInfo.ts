

export class ApplyObjectDetailInfo {
    public id?: string;
    private 'object_id'?: string;
    private 'object_type'?: string;
    private 'object_name'?: string;
    private 'object_domain'?: string;
    public constructor() { 
    }
    public withId(id: string): ApplyObjectDetailInfo {
        this['id'] = id;
        return this;
    }
    public withObjectId(objectId: string): ApplyObjectDetailInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: string): ApplyObjectDetailInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): ApplyObjectDetailInfo {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectDomain(objectDomain: string): ApplyObjectDetailInfo {
        this['object_domain'] = objectDomain;
        return this;
    }
    public set objectDomain(objectDomain: string  | undefined) {
        this['object_domain'] = objectDomain;
    }
    public get objectDomain(): string | undefined {
        return this['object_domain'];
    }
}