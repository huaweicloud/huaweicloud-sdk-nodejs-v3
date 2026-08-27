import { StartOnlineDDLInfoItem } from './StartOnlineDDLInfoItem';


export class StartOnlineTaskContentItem {
    public schema?: string;
    private 'ddl_info'?: Array<StartOnlineDDLInfoItem>;
    public constructor(schema?: string, ddlInfo?: Array<StartOnlineDDLInfoItem>) { 
        this['schema'] = schema;
        this['ddl_info'] = ddlInfo;
    }
    public withSchema(schema: string): StartOnlineTaskContentItem {
        this['schema'] = schema;
        return this;
    }
    public withDdlInfo(ddlInfo: Array<StartOnlineDDLInfoItem>): StartOnlineTaskContentItem {
        this['ddl_info'] = ddlInfo;
        return this;
    }
    public set ddlInfo(ddlInfo: Array<StartOnlineDDLInfoItem>  | undefined) {
        this['ddl_info'] = ddlInfo;
    }
    public get ddlInfo(): Array<StartOnlineDDLInfoItem> | undefined {
        return this['ddl_info'];
    }
}