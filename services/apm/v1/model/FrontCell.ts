

export class FrontCell {
    private 'data_type'?: string;
    private 'function'?: string;
    public trace?: boolean;
    public span?: boolean;
    private 'span_field'?: string;
    public precision?: number;
    public text?: string;
    public unit?: string;
    public visible?: boolean;
    public constructor() { 
    }
    public withDataType(dataType: string): FrontCell {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withFunction(_function: string): FrontCell {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string  | undefined) {
        this['function'] = _function;
    }
    public get _function(): string | undefined {
        return this['function'];
    }
    public withTrace(trace: boolean): FrontCell {
        this['trace'] = trace;
        return this;
    }
    public withSpan(span: boolean): FrontCell {
        this['span'] = span;
        return this;
    }
    public withSpanField(spanField: string): FrontCell {
        this['span_field'] = spanField;
        return this;
    }
    public set spanField(spanField: string  | undefined) {
        this['span_field'] = spanField;
    }
    public get spanField(): string | undefined {
        return this['span_field'];
    }
    public withPrecision(precision: number): FrontCell {
        this['precision'] = precision;
        return this;
    }
    public withText(text: string): FrontCell {
        this['text'] = text;
        return this;
    }
    public withUnit(unit: string): FrontCell {
        this['unit'] = unit;
        return this;
    }
    public withVisible(visible: boolean): FrontCell {
        this['visible'] = visible;
        return this;
    }
}