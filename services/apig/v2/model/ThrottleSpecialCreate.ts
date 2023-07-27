

export class ThrottleSpecialCreate {
    private 'call_limits'?: number;
    private 'object_id'?: string;
    private 'object_type'?: ThrottleSpecialCreateObjectTypeEnum | string;
    public constructor(callLimits?: number, objectId?: string, objectType?: string) { 
        this['call_limits'] = callLimits;
        this['object_id'] = objectId;
        this['object_type'] = objectType;
    }
    public withCallLimits(callLimits: number): ThrottleSpecialCreate {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
    public withObjectId(objectId: string): ThrottleSpecialCreate {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: ThrottleSpecialCreateObjectTypeEnum | string): ThrottleSpecialCreate {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ThrottleSpecialCreateObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ThrottleSpecialCreateObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThrottleSpecialCreateObjectTypeEnum {
    APP = 'APP',
    USER = 'USER'
}
