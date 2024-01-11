import { ColumnLineage } from './ColumnLineage';
import { TableInfo } from './TableInfo';


export class TableLineage {
    public name?: string;
    private 'input_tables'?: Array<TableInfo>;
    private 'output_tables'?: Array<TableInfo>;
    private 'source_connection_id'?: string;
    private 'target_connection_id'?: string;
    private 'column_lineages'?: Array<ColumnLineage>;
    public constructor(name?: string, inputTables?: Array<TableInfo>, outputTables?: Array<TableInfo>, sourceConnectionId?: string) { 
        this['name'] = name;
        this['input_tables'] = inputTables;
        this['output_tables'] = outputTables;
        this['source_connection_id'] = sourceConnectionId;
    }
    public withName(name: string): TableLineage {
        this['name'] = name;
        return this;
    }
    public withInputTables(inputTables: Array<TableInfo>): TableLineage {
        this['input_tables'] = inputTables;
        return this;
    }
    public set inputTables(inputTables: Array<TableInfo>  | undefined) {
        this['input_tables'] = inputTables;
    }
    public get inputTables(): Array<TableInfo> | undefined {
        return this['input_tables'];
    }
    public withOutputTables(outputTables: Array<TableInfo>): TableLineage {
        this['output_tables'] = outputTables;
        return this;
    }
    public set outputTables(outputTables: Array<TableInfo>  | undefined) {
        this['output_tables'] = outputTables;
    }
    public get outputTables(): Array<TableInfo> | undefined {
        return this['output_tables'];
    }
    public withSourceConnectionId(sourceConnectionId: string): TableLineage {
        this['source_connection_id'] = sourceConnectionId;
        return this;
    }
    public set sourceConnectionId(sourceConnectionId: string  | undefined) {
        this['source_connection_id'] = sourceConnectionId;
    }
    public get sourceConnectionId(): string | undefined {
        return this['source_connection_id'];
    }
    public withTargetConnectionId(targetConnectionId: string): TableLineage {
        this['target_connection_id'] = targetConnectionId;
        return this;
    }
    public set targetConnectionId(targetConnectionId: string  | undefined) {
        this['target_connection_id'] = targetConnectionId;
    }
    public get targetConnectionId(): string | undefined {
        return this['target_connection_id'];
    }
    public withColumnLineages(columnLineages: Array<ColumnLineage>): TableLineage {
        this['column_lineages'] = columnLineages;
        return this;
    }
    public set columnLineages(columnLineages: Array<ColumnLineage>  | undefined) {
        this['column_lineages'] = columnLineages;
    }
    public get columnLineages(): Array<ColumnLineage> | undefined {
        return this['column_lineages'];
    }
}