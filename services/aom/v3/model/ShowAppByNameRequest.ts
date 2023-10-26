

export class ShowAppByNameRequest {
    public name?: string;
    private 'display_name'?: string;
    public constructor() { 
    }
    public withName(name: string): ShowAppByNameRequest {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): ShowAppByNameRequest {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}