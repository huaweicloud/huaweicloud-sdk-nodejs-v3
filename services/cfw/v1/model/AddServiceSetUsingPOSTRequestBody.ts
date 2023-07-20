

export class AddServiceSetUsingPOSTRequestBody {
    private 'object_id'?: string;
    public name?: string;
    public description?: string;
    public constructor(objectId?: string, name?: string) { 
        this['object_id'] = objectId;
        this['name'] = name;
    }
    public withObjectId(objectId: string): AddServiceSetUsingPOSTRequestBody {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withName(name: string): AddServiceSetUsingPOSTRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddServiceSetUsingPOSTRequestBody {
        this['description'] = description;
        return this;
    }
}