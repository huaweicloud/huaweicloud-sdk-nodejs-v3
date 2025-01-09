

export class ApplyObject {
    private 'object_id'?: string;
    private 'object_type'?: ApplyObjectObjectTypeEnum | string;
    private 'object_name'?: string;
    public constructor() { 
    }
    public withObjectId(objectId: string): ApplyObject {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: ApplyObjectObjectTypeEnum | string): ApplyObject {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ApplyObjectObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ApplyObjectObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): ApplyObject {
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
export enum ApplyObjectObjectTypeEnum {
    DESKTOP = 'DESKTOP',
    DESKTOP_POOL = 'DESKTOP_POOL',
    ALL_DESKTOPS = 'ALL_DESKTOPS',
    DESKTOP_TAG = 'DESKTOP_TAG'
}
