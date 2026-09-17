import { ExportColumnInfo } from './ExportColumnInfo';


export class ExportFilterInfo {
    private 'db_names'?: Array<string>;
    private 'tb_names'?: Array<string>;
    private 'file_names'?: Array<string>;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'type_list'?: Array<string>;
    private 'column_list'?: Array<ExportColumnInfo>;
    private 'parse_double_insert'?: boolean;
    public constructor() { 
    }
    public withDbNames(dbNames: Array<string>): ExportFilterInfo {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string>  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): Array<string> | undefined {
        return this['db_names'];
    }
    public withTbNames(tbNames: Array<string>): ExportFilterInfo {
        this['tb_names'] = tbNames;
        return this;
    }
    public set tbNames(tbNames: Array<string>  | undefined) {
        this['tb_names'] = tbNames;
    }
    public get tbNames(): Array<string> | undefined {
        return this['tb_names'];
    }
    public withFileNames(fileNames: Array<string>): ExportFilterInfo {
        this['file_names'] = fileNames;
        return this;
    }
    public set fileNames(fileNames: Array<string>  | undefined) {
        this['file_names'] = fileNames;
    }
    public get fileNames(): Array<string> | undefined {
        return this['file_names'];
    }
    public withStartTime(startTime: number): ExportFilterInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExportFilterInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTypeList(typeList: Array<string>): ExportFilterInfo {
        this['type_list'] = typeList;
        return this;
    }
    public set typeList(typeList: Array<string>  | undefined) {
        this['type_list'] = typeList;
    }
    public get typeList(): Array<string> | undefined {
        return this['type_list'];
    }
    public withColumnList(columnList: Array<ExportColumnInfo>): ExportFilterInfo {
        this['column_list'] = columnList;
        return this;
    }
    public set columnList(columnList: Array<ExportColumnInfo>  | undefined) {
        this['column_list'] = columnList;
    }
    public get columnList(): Array<ExportColumnInfo> | undefined {
        return this['column_list'];
    }
    public withParseDoubleInsert(parseDoubleInsert: boolean): ExportFilterInfo {
        this['parse_double_insert'] = parseDoubleInsert;
        return this;
    }
    public set parseDoubleInsert(parseDoubleInsert: boolean  | undefined) {
        this['parse_double_insert'] = parseDoubleInsert;
    }
    public get parseDoubleInsert(): boolean | undefined {
        return this['parse_double_insert'];
    }
}