

export class ListDiffDetailsResult {
    public name?: string;
    private 'source_value'?: string;
    private 'target_value'?: string;
    public constructor() { 
    }
    public withName(name: string): ListDiffDetailsResult {
        this['name'] = name;
        return this;
    }
    public withSourceValue(sourceValue: string): ListDiffDetailsResult {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string  | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue(): string | undefined {
        return this['source_value'];
    }
    public withTargetValue(targetValue: string): ListDiffDetailsResult {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
}