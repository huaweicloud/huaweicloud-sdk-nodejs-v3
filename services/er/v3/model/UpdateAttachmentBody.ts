

export class UpdateAttachmentBody {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateAttachmentBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateAttachmentBody {
        this['name'] = name;
        return this;
    }
}