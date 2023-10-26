

export class SubAppUpdateParam {
    public name?: string;
    private 'display_name'?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): SubAppUpdateParam {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): SubAppUpdateParam {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescription(description: string): SubAppUpdateParam {
        this['description'] = description;
        return this;
    }
}