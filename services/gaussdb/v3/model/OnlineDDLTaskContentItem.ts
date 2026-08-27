import { OnlineDDLInfoItem } from './OnlineDDLInfoItem';


export class OnlineDDLTaskContentItem {
    public schema?: string;
    private 'ddl_info'?: Array<OnlineDDLInfoItem>;
    public constructor() { 
    }
    public withSchema(schema: string): OnlineDDLTaskContentItem {
        this['schema'] = schema;
        return this;
    }
    public withDdlInfo(ddlInfo: Array<OnlineDDLInfoItem>): OnlineDDLTaskContentItem {
        this['ddl_info'] = ddlInfo;
        return this;
    }
    public set ddlInfo(ddlInfo: Array<OnlineDDLInfoItem>  | undefined) {
        this['ddl_info'] = ddlInfo;
    }
    public get ddlInfo(): Array<OnlineDDLInfoItem> | undefined {
        return this['ddl_info'];
    }
}