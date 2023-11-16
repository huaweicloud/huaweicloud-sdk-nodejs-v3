

export class LimitsParam {
    public disable?: string;
    private 'display_name'?: string;
    public name?: string;
    public constructor() { 
    }
    public withDisable(disable: string): LimitsParam {
        this['disable'] = disable;
        return this;
    }
    public withDisplayName(displayName: string): LimitsParam {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withName(name: string): LimitsParam {
        this['name'] = name;
        return this;
    }
}