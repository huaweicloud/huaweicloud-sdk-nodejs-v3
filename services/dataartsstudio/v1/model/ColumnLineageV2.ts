import { ColumnDetails } from './ColumnDetails';


export class ColumnLineageV2 {
    private 'input_columns'?: Array<ColumnDetails>;
    private 'output_columns'?: Array<ColumnDetails>;
    public constructor(inputColumns?: Array<ColumnDetails>, outputColumns?: Array<ColumnDetails>) { 
        this['input_columns'] = inputColumns;
        this['output_columns'] = outputColumns;
    }
    public withInputColumns(inputColumns: Array<ColumnDetails>): ColumnLineageV2 {
        this['input_columns'] = inputColumns;
        return this;
    }
    public set inputColumns(inputColumns: Array<ColumnDetails>  | undefined) {
        this['input_columns'] = inputColumns;
    }
    public get inputColumns(): Array<ColumnDetails> | undefined {
        return this['input_columns'];
    }
    public withOutputColumns(outputColumns: Array<ColumnDetails>): ColumnLineageV2 {
        this['output_columns'] = outputColumns;
        return this;
    }
    public set outputColumns(outputColumns: Array<ColumnDetails>  | undefined) {
        this['output_columns'] = outputColumns;
    }
    public get outputColumns(): Array<ColumnDetails> | undefined {
        return this['output_columns'];
    }
}