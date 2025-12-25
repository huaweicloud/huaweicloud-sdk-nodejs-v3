import { IsapTableColumnDisplaySettingDto } from './IsapTableColumnDisplaySettingDto';


export class IsapTableDisplaySettingDto {
    public columns?: Array<IsapTableColumnDisplaySettingDto>;
    public format?: IsapTableDisplaySettingDtoFormatEnum | string;
    public constructor() { 
    }
    public withColumns(columns: Array<IsapTableColumnDisplaySettingDto>): IsapTableDisplaySettingDto {
        this['columns'] = columns;
        return this;
    }
    public withFormat(format: IsapTableDisplaySettingDtoFormatEnum | string): IsapTableDisplaySettingDto {
        this['format'] = format;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IsapTableDisplaySettingDtoFormatEnum {
    TABLE = 'TABLE',
    RAW = 'RAW'
}
