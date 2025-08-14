

export class UpdateApplicationInstanceDisplayDataReqBody {
    public description?: string;
    private 'display_name'?: string;
    public constructor(description?: string, displayName?: string) { 
        this['description'] = description;
        this['display_name'] = displayName;
    }
    public withDescription(description: string): UpdateApplicationInstanceDisplayDataReqBody {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): UpdateApplicationInstanceDisplayDataReqBody {
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