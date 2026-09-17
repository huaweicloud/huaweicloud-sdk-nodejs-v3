

export class ListPipelinesPageHighestConfidentiality {
    public id?: string;
    public code?: string;
    private 'reserve_1'?: string;
    public value?: string;
    private 'value_en'?: string;
    public sequence?: number;
    public constructor() { 
    }
    public withId(id: string): ListPipelinesPageHighestConfidentiality {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): ListPipelinesPageHighestConfidentiality {
        this['code'] = code;
        return this;
    }
    public withReserve1(reserve1: string): ListPipelinesPageHighestConfidentiality {
        this['reserve_1'] = reserve1;
        return this;
    }
    public set reserve1(reserve1: string  | undefined) {
        this['reserve_1'] = reserve1;
    }
    public get reserve1(): string | undefined {
        return this['reserve_1'];
    }
    public withValue(value: string): ListPipelinesPageHighestConfidentiality {
        this['value'] = value;
        return this;
    }
    public withValueEn(valueEn: string): ListPipelinesPageHighestConfidentiality {
        this['value_en'] = valueEn;
        return this;
    }
    public set valueEn(valueEn: string  | undefined) {
        this['value_en'] = valueEn;
    }
    public get valueEn(): string | undefined {
        return this['value_en'];
    }
    public withSequence(sequence: number): ListPipelinesPageHighestConfidentiality {
        this['sequence'] = sequence;
        return this;
    }
}