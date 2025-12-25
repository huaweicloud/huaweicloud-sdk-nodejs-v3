import { AnalysisField } from './AnalysisField';


export class AnalysisResults {
    public datarows?: Array<Array<object>>;
    public schema?: Array<AnalysisField>;
    public size?: number;
    public total?: number;
    public constructor(datarows?: Array<Array<object>>, schema?: Array<AnalysisField>, size?: number, total?: number) { 
        this['datarows'] = datarows;
        this['schema'] = schema;
        this['size'] = size;
        this['total'] = total;
    }
    public withDatarows(datarows: Array<Array<object>>): AnalysisResults {
        this['datarows'] = datarows;
        return this;
    }
    public withSchema(schema: Array<AnalysisField>): AnalysisResults {
        this['schema'] = schema;
        return this;
    }
    public withSize(size: number): AnalysisResults {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): AnalysisResults {
        this['total'] = total;
        return this;
    }
}