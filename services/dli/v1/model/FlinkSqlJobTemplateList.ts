import { FlinkSqlJobTemplate } from './FlinkSqlJobTemplate';


export class FlinkSqlJobTemplateList {
    private 'total_count'?: number;
    public templates?: Array<FlinkSqlJobTemplate>;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): FlinkSqlJobTemplateList {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTemplates(templates: Array<FlinkSqlJobTemplate>): FlinkSqlJobTemplateList {
        this['templates'] = templates;
        return this;
    }
}