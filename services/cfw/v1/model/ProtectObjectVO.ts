

export class ProtectObjectVO {
    private 'object_id'?: string | undefined;
    private 'object_name'?: string | undefined;
    public type?: ProtectObjectVOTypeEnum;
    public constructor() { 
    }
    public withObjectId(objectId: string): ProtectObjectVO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withObjectName(objectName: string): ProtectObjectVO {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName() {
        return this['object_name'];
    }
    public withType(type: ProtectObjectVOTypeEnum): ProtectObjectVO {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProtectObjectVOTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
