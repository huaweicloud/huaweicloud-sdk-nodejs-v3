

export class TaskApplyObjectInfo {
    private 'object_type'?: TaskApplyObjectInfoObjectTypeEnum | string;
    private 'object_id'?: string;
    public constructor(objectType?: string) { 
        this['object_type'] = objectType;
    }
    public withObjectType(objectType: TaskApplyObjectInfoObjectTypeEnum | string): TaskApplyObjectInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: TaskApplyObjectInfoObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): TaskApplyObjectInfoObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectId(objectId: string): TaskApplyObjectInfo {
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
export enum TaskApplyObjectInfoObjectTypeEnum {
    DESKTOP = 'DESKTOP',
    ALL_DESKTOPS = 'ALL_DESKTOPS',
    DESKTOP_POOL = 'DESKTOP_POOL',
    DESKTOP_TAG = 'DESKTOP_TAG',
    ALL_IMAGES = 'ALL_IMAGES',
    APPLICATION_SERVER = 'APPLICATION_SERVER',
    APPLICATION_SERVER_GROUP = 'APPLICATION_SERVER_GROUP'
}
