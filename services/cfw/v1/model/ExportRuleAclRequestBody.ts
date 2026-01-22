

export class ExportRuleAclRequestBody {
    private 'object_id'?: string;
    public constructor(objectId?: string) { 
        this['object_id'] = objectId;
    }
    public withObjectId(objectId: string): ExportRuleAclRequestBody {
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