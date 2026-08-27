

export class ApplyObjectInfo {
    private 'object_type'?: ApplyObjectInfoObjectTypeEnum | string;
    private 'object_id'?: string;
    public constructor() { 
    }
    public withObjectType(objectType: ApplyObjectInfoObjectTypeEnum | string): ApplyObjectInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ApplyObjectInfoObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ApplyObjectInfoObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectId(objectId: string): ApplyObjectInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyObjectInfoObjectTypeEnum {
    DESKTOP = 'DESKTOP',
    ALL_DESKTOPS = 'ALL_DESKTOPS',
    DESKTOP_POOL = 'DESKTOP_POOL',
    DESKTOP_TAG = 'DESKTOP_TAG',
    ALL_USERS = 'ALL_USERS',
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}
