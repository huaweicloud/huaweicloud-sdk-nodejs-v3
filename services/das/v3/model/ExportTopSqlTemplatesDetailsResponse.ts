import { TopSqlTemplate } from './TopSqlTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportTopSqlTemplatesDetailsResponse extends SdkResponse {
    private 'top_sql_templates'?: Array<TopSqlTemplate>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTopSqlTemplates(topSqlTemplates: Array<TopSqlTemplate>): ExportTopSqlTemplatesDetailsResponse {
        this['top_sql_templates'] = topSqlTemplates;
        return this;
    }
    public set topSqlTemplates(topSqlTemplates: Array<TopSqlTemplate>  | undefined) {
        this['top_sql_templates'] = topSqlTemplates;
    }
    public get topSqlTemplates(): Array<TopSqlTemplate> | undefined {
        return this['top_sql_templates'];
    }
    public withTotalCount(totalCount: number): ExportTopSqlTemplatesDetailsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}