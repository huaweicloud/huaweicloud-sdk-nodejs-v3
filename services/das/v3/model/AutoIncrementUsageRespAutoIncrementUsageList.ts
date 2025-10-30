

export class AutoIncrementUsageRespAutoIncrementUsageList {
    public database?: string;
    public table?: string;
    public column?: string;
    private 'current_value'?: string;
    private 'max_value'?: string;
    public ratio?: string;
    public constructor(database?: string, table?: string, column?: string, currentValue?: string, maxValue?: string, ratio?: string) { 
        this['database'] = database;
        this['table'] = table;
        this['column'] = column;
        this['current_value'] = currentValue;
        this['max_value'] = maxValue;
        this['ratio'] = ratio;
    }
    public withDatabase(database: string): AutoIncrementUsageRespAutoIncrementUsageList {
        this['database'] = database;
        return this;
    }
    public withTable(table: string): AutoIncrementUsageRespAutoIncrementUsageList {
        this['table'] = table;
        return this;
    }
    public withColumn(column: string): AutoIncrementUsageRespAutoIncrementUsageList {
        this['column'] = column;
        return this;
    }
    public withCurrentValue(currentValue: string): AutoIncrementUsageRespAutoIncrementUsageList {
        this['current_value'] = currentValue;
        return this;
    }
    public set currentValue(currentValue: string  | undefined) {
        this['current_value'] = currentValue;
    }
    public get currentValue(): string | undefined {
        return this['current_value'];
    }
    public withMaxValue(maxValue: string): AutoIncrementUsageRespAutoIncrementUsageList {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: string  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): string | undefined {
        return this['max_value'];
    }
    public withRatio(ratio: string): AutoIncrementUsageRespAutoIncrementUsageList {
        this['ratio'] = ratio;
        return this;
    }
}