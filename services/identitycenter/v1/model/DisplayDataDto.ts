

export class DisplayDataDto {
    public description?: string;
    private 'display_name'?: string;
    private 'icon_url'?: string;
    public constructor() { 
    }
    public withDescription(description: string): DisplayDataDto {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): DisplayDataDto {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withIconUrl(iconUrl: string): DisplayDataDto {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
}