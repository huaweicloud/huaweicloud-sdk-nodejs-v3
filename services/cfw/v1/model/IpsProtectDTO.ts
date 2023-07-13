

export class IpsProtectDTO {
    private 'object_id'?: string | undefined;
    public mode?: number;
    public constructor() { 
    }
    public withObjectId(objectId: string): IpsProtectDTO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withMode(mode: number): IpsProtectDTO {
        this['mode'] = mode;
        return this;
    }
}