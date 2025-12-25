import { TableColumnDisplaySetting } from './TableColumnDisplaySetting';


export class TableDisplaySetting {
    public columns?: Array<TableColumnDisplaySetting>;
    public format?: TableDisplaySettingFormatEnum | string;
    public constructor() { 
    }
    public withColumns(columns: Array<TableColumnDisplaySetting>): TableDisplaySetting {
        this['columns'] = columns;
        return this;
    }
    public withFormat(format: TableDisplaySettingFormatEnum | string): TableDisplaySetting {
        this['format'] = format;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TableDisplaySettingFormatEnum {
    TABLE = 'TABLE',
    RAW = 'RAW'
}
