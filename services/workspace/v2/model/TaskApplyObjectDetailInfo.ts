

export class TaskApplyObjectDetailInfo {
    private 'object_id'?: string;
    private 'object_type'?: string;
    private 'object_name'?: string;
    private 'object_extra_id'?: string;
    public constructor() { 
    }
    public withObjectId(objectId: string): TaskApplyObjectDetailInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: string): TaskApplyObjectDetailInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): TaskApplyObjectDetailInfo {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectExtraId(objectExtraId: string): TaskApplyObjectDetailInfo {
        this['object_extra_id'] = objectExtraId;
        return this;
    }
    public set objectExtraId(objectExtraId: string  | undefined) {
        this['object_extra_id'] = objectExtraId;
    }
    public get objectExtraId(): string | undefined {
        return this['object_extra_id'];
    }
}