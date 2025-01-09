

export class AuthorizedObjects {
    private 'object_type'?: AuthorizedObjectsObjectTypeEnum | string;
    private 'object_id'?: string;
    private 'object_name'?: string;
    private 'user_group'?: string;
    private 'created_at'?: string;
    public constructor(objectType?: string, objectId?: string, objectName?: string, userGroup?: string) { 
        this['object_type'] = objectType;
        this['object_id'] = objectId;
        this['object_name'] = objectName;
        this['user_group'] = userGroup;
    }
    public withObjectType(objectType: AuthorizedObjectsObjectTypeEnum | string): AuthorizedObjects {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: AuthorizedObjectsObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): AuthorizedObjectsObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectId(objectId: string): AuthorizedObjects {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectName(objectName: string): AuthorizedObjects {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withUserGroup(userGroup: string): AuthorizedObjects {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withCreatedAt(createdAt: string): AuthorizedObjects {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizedObjectsObjectTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}
