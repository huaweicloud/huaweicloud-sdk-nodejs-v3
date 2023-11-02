

export class StaticParam {
    private 'para_name'?: string;
    private 'para_value'?: string;
    public constructor() { 
    }
    public withParaName(paraName: string): StaticParam {
        this['para_name'] = paraName;
        return this;
    }
    public set paraName(paraName: string  | undefined) {
        this['para_name'] = paraName;
    }
    public get paraName(): string | undefined {
        return this['para_name'];
    }
    public withParaValue(paraValue: string): StaticParam {
        this['para_value'] = paraValue;
        return this;
    }
    public set paraValue(paraValue: string  | undefined) {
        this['para_value'] = paraValue;
    }
    public get paraValue(): string | undefined {
        return this['para_value'];
    }
}