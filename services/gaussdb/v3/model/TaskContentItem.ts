import { DDLInfoItem } from './DDLInfoItem';


export class TaskContentItem {
    public schema?: string;
    private 'ddl_info'?: Array<DDLInfoItem>;
    public constructor(schema?: string, ddlInfo?: Array<DDLInfoItem>) { 
        this['schema'] = schema;
        this['ddl_info'] = ddlInfo;
    }
    public withSchema(schema: string): TaskContentItem {
        this['schema'] = schema;
        return this;
    }
    public withDdlInfo(ddlInfo: Array<DDLInfoItem>): TaskContentItem {
        this['ddl_info'] = ddlInfo;
        return this;
    }
    public set ddlInfo(ddlInfo: Array<DDLInfoItem>  | undefined) {
        this['ddl_info'] = ddlInfo;
    }
    public get ddlInfo(): Array<DDLInfoItem> | undefined {
        return this['ddl_info'];
    }
}