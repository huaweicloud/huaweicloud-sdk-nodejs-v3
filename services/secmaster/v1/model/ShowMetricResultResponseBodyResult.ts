

export class ShowMetricResultResponseBodyResult {
    public labels?: Array<string>;
    public datarows?: Array<Array<object>>;
    private 'effective_column'?: string;
    public constructor(labels?: Array<string>, datarows?: Array<Array<object>>) { 
        this['labels'] = labels;
        this['datarows'] = datarows;
    }
    public withLabels(labels: Array<string>): ShowMetricResultResponseBodyResult {
        this['labels'] = labels;
        return this;
    }
    public withDatarows(datarows: Array<Array<object>>): ShowMetricResultResponseBodyResult {
        this['datarows'] = datarows;
        return this;
    }
    public withEffectiveColumn(effectiveColumn: string): ShowMetricResultResponseBodyResult {
        this['effective_column'] = effectiveColumn;
        return this;
    }
    public set effectiveColumn(effectiveColumn: string  | undefined) {
        this['effective_column'] = effectiveColumn;
    }
    public get effectiveColumn(): string | undefined {
        return this['effective_column'];
    }
}