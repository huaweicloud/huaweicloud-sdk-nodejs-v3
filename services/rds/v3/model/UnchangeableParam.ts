

export class UnchangeableParam {
    private 'lower_case_table_names'?: string;
    public constructor() { 
    }
    public withLowerCaseTableNames(lowerCaseTableNames: string): UnchangeableParam {
        this['lower_case_table_names'] = lowerCaseTableNames;
        return this;
    }
    public set lowerCaseTableNames(lowerCaseTableNames: string  | undefined) {
        this['lower_case_table_names'] = lowerCaseTableNames;
    }
    public get lowerCaseTableNames(): string | undefined {
        return this['lower_case_table_names'];
    }
}