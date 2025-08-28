import { SlowSqlTemplate } from './SlowSqlTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportSlowSqlTemplatesDetailsResponse extends SdkResponse {
    private 'slow_sql_templates'?: Array<SlowSqlTemplate>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSlowSqlTemplates(slowSqlTemplates: Array<SlowSqlTemplate>): ExportSlowSqlTemplatesDetailsResponse {
        this['slow_sql_templates'] = slowSqlTemplates;
        return this;
    }
    public set slowSqlTemplates(slowSqlTemplates: Array<SlowSqlTemplate>  | undefined) {
        this['slow_sql_templates'] = slowSqlTemplates;
    }
    public get slowSqlTemplates(): Array<SlowSqlTemplate> | undefined {
        return this['slow_sql_templates'];
    }
    public withTotalCount(totalCount: number): ExportSlowSqlTemplatesDetailsResponse {
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