

export class CreateGroupReqBody {
    public description?: string;
    private 'display_name'?: string;
    public constructor(displayName?: string) { 
        this['display_name'] = displayName;
    }
    public withDescription(description: string): CreateGroupReqBody {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): CreateGroupReqBody {
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