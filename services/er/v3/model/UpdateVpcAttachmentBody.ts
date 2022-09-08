

export class UpdateVpcAttachmentBody {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateVpcAttachmentBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateVpcAttachmentBody {
        this['name'] = name;
        return this;
    }
}