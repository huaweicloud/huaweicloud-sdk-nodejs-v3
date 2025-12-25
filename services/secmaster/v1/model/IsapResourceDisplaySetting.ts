import { IsapResourceDisplaySettingColumns } from './IsapResourceDisplaySettingColumns';


export class IsapResourceDisplaySetting {
    public columns?: Array<IsapResourceDisplaySettingColumns>;
    public format?: string;
    public constructor() { 
    }
    public withColumns(columns: Array<IsapResourceDisplaySettingColumns>): IsapResourceDisplaySetting {
        this['columns'] = columns;
        return this;
    }
    public withFormat(format: string): IsapResourceDisplaySetting {
        this['format'] = format;
        return this;
    }
}