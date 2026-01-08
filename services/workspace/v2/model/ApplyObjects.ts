

export class ApplyObjects {
    private 'object_type'?: ApplyObjectsObjectTypeEnum | string;
    private 'object_id'?: string;
    private 'object_name'?: string;
    public constructor(objectType?: string, objectId?: string, objectName?: string) { 
        this['object_type'] = objectType;
        this['object_id'] = objectId;
        this['object_name'] = objectName;
    }
    public withObjectType(objectType: ApplyObjectsObjectTypeEnum | string): ApplyObjects {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ApplyObjectsObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ApplyObjectsObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectId(objectId: string): ApplyObjects {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectName(objectName: string): ApplyObjects {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyObjectsObjectTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    ALL = 'ALL'
}
