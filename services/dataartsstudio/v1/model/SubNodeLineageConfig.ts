import { ColumnLineageConfig } from './ColumnLineageConfig';
import { TableConfig } from './TableConfig';


export class SubNodeLineageConfig {
    public name?: string;
    private 'sql_statement'?: string;
    private 'input_tables'?: Array<TableConfig>;
    private 'output_table'?: TableConfig;
    private 'column_lineages'?: Array<ColumnLineageConfig>;
    public constructor(name?: string, inputTables?: Array<TableConfig>, outputTable?: TableConfig) { 
        this['name'] = name;
        this['input_tables'] = inputTables;
        this['output_table'] = outputTable;
    }
    public withName(name: string): SubNodeLineageConfig {
        this['name'] = name;
        return this;
    }
    public withSqlStatement(sqlStatement: string): SubNodeLineageConfig {
        this['sql_statement'] = sqlStatement;
        return this;
    }
    public set sqlStatement(sqlStatement: string  | undefined) {
        this['sql_statement'] = sqlStatement;
    }
    public get sqlStatement(): string | undefined {
        return this['sql_statement'];
    }
    public withInputTables(inputTables: Array<TableConfig>): SubNodeLineageConfig {
        this['input_tables'] = inputTables;
        return this;
    }
    public set inputTables(inputTables: Array<TableConfig>  | undefined) {
        this['input_tables'] = inputTables;
    }
    public get inputTables(): Array<TableConfig> | undefined {
        return this['input_tables'];
    }
    public withOutputTable(outputTable: TableConfig): SubNodeLineageConfig {
        this['output_table'] = outputTable;
        return this;
    }
    public set outputTable(outputTable: TableConfig  | undefined) {
        this['output_table'] = outputTable;
    }
    public get outputTable(): TableConfig | undefined {
        return this['output_table'];
    }
    public withColumnLineages(columnLineages: Array<ColumnLineageConfig>): SubNodeLineageConfig {
        this['column_lineages'] = columnLineages;
        return this;
    }
    public set columnLineages(columnLineages: Array<ColumnLineageConfig>  | undefined) {
        this['column_lineages'] = columnLineages;
    }
    public get columnLineages(): Array<ColumnLineageConfig> | undefined {
        return this['column_lineages'];
    }
}