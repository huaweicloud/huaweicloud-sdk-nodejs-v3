import { ColumnLineageV2 } from './ColumnLineageV2';
import { TableInfoV2 } from './TableInfoV2';


export class TableLineageV2 {
    private 'input_tables'?: Array<TableInfoV2>;
    private 'output_tables'?: Array<TableInfoV2>;
    private 'column_lineages'?: Array<ColumnLineageV2>;
    public constructor(inputTables?: Array<TableInfoV2>, outputTables?: Array<TableInfoV2>) { 
        this['input_tables'] = inputTables;
        this['output_tables'] = outputTables;
    }
    public withInputTables(inputTables: Array<TableInfoV2>): TableLineageV2 {
        this['input_tables'] = inputTables;
        return this;
    }
    public set inputTables(inputTables: Array<TableInfoV2>  | undefined) {
        this['input_tables'] = inputTables;
    }
    public get inputTables(): Array<TableInfoV2> | undefined {
        return this['input_tables'];
    }
    public withOutputTables(outputTables: Array<TableInfoV2>): TableLineageV2 {
        this['output_tables'] = outputTables;
        return this;
    }
    public set outputTables(outputTables: Array<TableInfoV2>  | undefined) {
        this['output_tables'] = outputTables;
    }
    public get outputTables(): Array<TableInfoV2> | undefined {
        return this['output_tables'];
    }
    public withColumnLineages(columnLineages: Array<ColumnLineageV2>): TableLineageV2 {
        this['column_lineages'] = columnLineages;
        return this;
    }
    public set columnLineages(columnLineages: Array<ColumnLineageV2>  | undefined) {
        this['column_lineages'] = columnLineages;
    }
    public get columnLineages(): Array<ColumnLineageV2> | undefined {
        return this['column_lineages'];
    }
}