

export class LineViewItem {
    private 'function'?: string;
    public as?: string;
    public constructor() { 
    }
    public withFunction(_function: string): LineViewItem {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string  | undefined) {
        this['function'] = _function;
    }
    public get _function(): string | undefined {
        return this['function'];
    }
    public withAs(as: string): LineViewItem {
        this['as'] = as;
        return this;
    }
}