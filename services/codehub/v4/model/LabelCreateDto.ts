

export class LabelCreateDto {
    public name?: string;
    public color?: string;
    public description?: string;
    private 'expires_at'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): LabelCreateDto {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): LabelCreateDto {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): LabelCreateDto {
        this['description'] = description;
        return this;
    }
    public withExpiresAt(expiresAt: string): LabelCreateDto {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
}