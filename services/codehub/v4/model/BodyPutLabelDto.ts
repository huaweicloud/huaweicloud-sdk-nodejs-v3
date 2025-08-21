

export class BodyPutLabelDto {
    public name?: string;
    private 'new_name'?: string;
    public color?: string;
    public description?: string;
    public priority?: number;
    private 'expires_at'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): BodyPutLabelDto {
        this['name'] = name;
        return this;
    }
    public withNewName(newName: string): BodyPutLabelDto {
        this['new_name'] = newName;
        return this;
    }
    public set newName(newName: string  | undefined) {
        this['new_name'] = newName;
    }
    public get newName(): string | undefined {
        return this['new_name'];
    }
    public withColor(color: string): BodyPutLabelDto {
        this['color'] = color;
        return this;
    }
    public withDescription(description: string): BodyPutLabelDto {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): BodyPutLabelDto {
        this['priority'] = priority;
        return this;
    }
    public withExpiresAt(expiresAt: string): BodyPutLabelDto {
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