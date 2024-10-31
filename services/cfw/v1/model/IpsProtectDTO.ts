

export class IpsProtectDTO {
    private 'object_id'?: string;
    public mode?: number;
    public constructor(objectId?: string, mode?: number) { 
        this['object_id'] = objectId;
        this['mode'] = mode;
    }
    public withObjectId(objectId: string): IpsProtectDTO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withMode(mode: number): IpsProtectDTO {
        this['mode'] = mode;
        return this;
    }
}