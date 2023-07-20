

export class RefererConfig {
    public type?: string;
    public value?: string;
    private 'include_empty'?: boolean;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): RefererConfig {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): RefererConfig {
        this['value'] = value;
        return this;
    }
    public withIncludeEmpty(includeEmpty: boolean): RefererConfig {
        this['include_empty'] = includeEmpty;
        return this;
    }
    public set includeEmpty(includeEmpty: boolean  | undefined) {
        this['include_empty'] = includeEmpty;
    }
    public get includeEmpty(): boolean | undefined {
        return this['include_empty'];
    }
}