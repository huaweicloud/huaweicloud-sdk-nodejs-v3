

export class FieldItem {
    private 'function'?: string;
    public as?: string;
    private 'default_value'?: string;
    public trace?: boolean;
    public precision?: number;
    public unit?: string;
    public visible?: boolean;
    public constructor(_function?: string) { 
        this['function'] = _function;
    }
    public withFunction(_function: string): FieldItem {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string  | undefined) {
        this['function'] = _function;
    }
    public get _function(): string | undefined {
        return this['function'];
    }
    public withAs(as: string): FieldItem {
        this['as'] = as;
        return this;
    }
    public withDefaultValue(defaultValue: string): FieldItem {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withTrace(trace: boolean): FieldItem {
        this['trace'] = trace;
        return this;
    }
    public withPrecision(precision: number): FieldItem {
        this['precision'] = precision;
        return this;
    }
    public withUnit(unit: string): FieldItem {
        this['unit'] = unit;
        return this;
    }
    public withVisible(visible: boolean): FieldItem {
        this['visible'] = visible;
        return this;
    }
}