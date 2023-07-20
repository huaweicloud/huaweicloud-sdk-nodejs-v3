

export class ChangeProtectStatusRequestBody {
    private 'object_id'?: string;
    public status?: ChangeProtectStatusRequestBodyStatusEnum | number;
    public constructor(objectId?: string, status?: number) { 
        this['object_id'] = objectId;
        this['status'] = status;
    }
    public withObjectId(objectId: string): ChangeProtectStatusRequestBody {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withStatus(status: ChangeProtectStatusRequestBodyStatusEnum | number): ChangeProtectStatusRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeProtectStatusRequestBodyStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
