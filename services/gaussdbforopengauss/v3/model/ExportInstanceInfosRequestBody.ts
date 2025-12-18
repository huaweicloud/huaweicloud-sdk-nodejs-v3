

export class ExportInstanceInfosRequestBody {
    private 'instance_list'?: Array<string>;
    private 'user_defined_columns'?: Array<string>;
    private 'time_zone'?: string;
    public language?: string;
    public constructor(userDefinedColumns?: Array<string>) { 
        this['user_defined_columns'] = userDefinedColumns;
    }
    public withInstanceList(instanceList: Array<string>): ExportInstanceInfosRequestBody {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<string>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<string> | undefined {
        return this['instance_list'];
    }
    public withUserDefinedColumns(userDefinedColumns: Array<string>): ExportInstanceInfosRequestBody {
        this['user_defined_columns'] = userDefinedColumns;
        return this;
    }
    public set userDefinedColumns(userDefinedColumns: Array<string>  | undefined) {
        this['user_defined_columns'] = userDefinedColumns;
    }
    public get userDefinedColumns(): Array<string> | undefined {
        return this['user_defined_columns'];
    }
    public withTimeZone(timeZone: string): ExportInstanceInfosRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withLanguage(language: string): ExportInstanceInfosRequestBody {
        this['language'] = language;
        return this;
    }
}