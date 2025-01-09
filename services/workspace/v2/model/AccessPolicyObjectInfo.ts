

export class AccessPolicyObjectInfo {
    private 'object_id'?: string;
    private 'object_type'?: AccessPolicyObjectInfoObjectTypeEnum | string;
    private 'object_name'?: string;
    public constructor(objectId?: string, objectType?: string) { 
        this['object_id'] = objectId;
        this['object_type'] = objectType;
    }
    public withObjectId(objectId: string): AccessPolicyObjectInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: AccessPolicyObjectInfoObjectTypeEnum | string): AccessPolicyObjectInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: AccessPolicyObjectInfoObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): AccessPolicyObjectInfoObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): AccessPolicyObjectInfo {
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
export enum AccessPolicyObjectInfoObjectTypeEnum {
    USER = 'USER',
    USERGROUP = 'USERGROUP'
}
