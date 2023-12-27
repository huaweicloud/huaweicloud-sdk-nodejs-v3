

export class CreateDockerRepositoryDO {
    public format?: string;
    private 'display_name'?: string;
    public description?: string;
    public type?: string;
    public constructor(format?: string, displayName?: string, type?: string) { 
        this['format'] = format;
        this['display_name'] = displayName;
        this['type'] = type;
    }
    public withFormat(format: string): CreateDockerRepositoryDO {
        this['format'] = format;
        return this;
    }
    public withDisplayName(displayName: string): CreateDockerRepositoryDO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescription(description: string): CreateDockerRepositoryDO {
        this['description'] = description;
        return this;
    }
    public withType(type: string): CreateDockerRepositoryDO {
        this['type'] = type;
        return this;
    }
}