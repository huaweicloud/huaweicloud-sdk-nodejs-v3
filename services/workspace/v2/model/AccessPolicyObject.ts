

export class AccessPolicyObject {
    private 'object_id'?: string;
    private 'object_name'?: string;
    private 'object_type'?: AccessPolicyObjectObjectTypeEnum | string;
    public constructor() { 
    }
    public withObjectId(objectId: string): AccessPolicyObject {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectName(objectName: string): AccessPolicyObject {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectType(objectType: AccessPolicyObjectObjectTypeEnum | string): AccessPolicyObject {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: AccessPolicyObjectObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): AccessPolicyObjectObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessPolicyObjectObjectTypeEnum {
    USER = 'USER',
    USERGROUP = 'USERGROUP'
}
