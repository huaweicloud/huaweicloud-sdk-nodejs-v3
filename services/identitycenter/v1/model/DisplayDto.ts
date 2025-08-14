

export class DisplayDto {
    public description?: string;
    private 'display_name'?: string;
    public icon?: string;
    public constructor(description?: string, displayName?: string) { 
        this['description'] = description;
        this['display_name'] = displayName;
    }
    public withDescription(description: string): DisplayDto {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): DisplayDto {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withIcon(icon: string): DisplayDto {
        this['icon'] = icon;
        return this;
    }
}