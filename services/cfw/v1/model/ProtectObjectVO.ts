

export class ProtectObjectVO {
    private 'object_id'?: string;
    private 'object_name'?: string;
    public type?: ProtectObjectVOTypeEnum | number;
    public constructor() { 
    }
    public withObjectId(objectId: string): ProtectObjectVO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectName(objectName: string): ProtectObjectVO {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withType(type: ProtectObjectVOTypeEnum | number): ProtectObjectVO {
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
