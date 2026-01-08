

export class SqlTypeRangeConfigResult {
    public category?: string;
    public prefixes?: string;
    private 'is_preset'?: boolean;
    public constructor() { 
    }
    public withCategory(category: string): SqlTypeRangeConfigResult {
        this['category'] = category;
        return this;
    }
    public withPrefixes(prefixes: string): SqlTypeRangeConfigResult {
        this['prefixes'] = prefixes;
        return this;
    }
    public withIsPreset(isPreset: boolean): SqlTypeRangeConfigResult {
        this['is_preset'] = isPreset;
        return this;
    }
    public set isPreset(isPreset: boolean  | undefined) {
        this['is_preset'] = isPreset;
    }
    public get isPreset(): boolean | undefined {
        return this['is_preset'];
    }
}