import { ColumnConfig } from './ColumnConfig';


export class ColumnLineageConfig {
    public name?: string;
    private 'input_columns'?: Array<ColumnConfig>;
    private 'output_column'?: ColumnConfig;
    public constructor(inputColumns?: Array<ColumnConfig>, outputColumn?: ColumnConfig) { 
        this['input_columns'] = inputColumns;
        this['output_column'] = outputColumn;
    }
    public withName(name: string): ColumnLineageConfig {
        this['name'] = name;
        return this;
    }
    public withInputColumns(inputColumns: Array<ColumnConfig>): ColumnLineageConfig {
        this['input_columns'] = inputColumns;
        return this;
    }
    public set inputColumns(inputColumns: Array<ColumnConfig>  | undefined) {
        this['input_columns'] = inputColumns;
    }
    public get inputColumns(): Array<ColumnConfig> | undefined {
        return this['input_columns'];
    }
    public withOutputColumn(outputColumn: ColumnConfig): ColumnLineageConfig {
        this['output_column'] = outputColumn;
        return this;
    }
    public set outputColumn(outputColumn: ColumnConfig  | undefined) {
        this['output_column'] = outputColumn;
    }
    public get outputColumn(): ColumnConfig | undefined {
        return this['output_column'];
    }
}