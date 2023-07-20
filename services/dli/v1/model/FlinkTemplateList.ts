import { FlinkTemplateDetail } from './FlinkTemplateDetail';


export class FlinkTemplateList {
    private 'total_count'?: number;
    public templates?: Array<FlinkTemplateDetail>;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): FlinkTemplateList {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTemplates(templates: Array<FlinkTemplateDetail>): FlinkTemplateList {
        this['templates'] = templates;
        return this;
    }
}