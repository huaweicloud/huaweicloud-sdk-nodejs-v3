

export class MetaDto {
    public resourceType?: string;
    public created?: string;
    public lastModified?: string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): MetaDto {
        this['resourceType'] = resourceType;
        return this;
    }
    public withCreated(created: string): MetaDto {
        this['created'] = created;
        return this;
    }
    public withLastModified(lastModified: string): MetaDto {
        this['lastModified'] = lastModified;
        return this;
    }
}