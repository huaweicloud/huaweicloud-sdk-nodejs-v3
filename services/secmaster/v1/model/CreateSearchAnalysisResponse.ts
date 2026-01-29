import { AnalysisField } from './AnalysisField';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSearchAnalysisResponse extends SdkResponse {
    public datarows?: Array<Array<object>>;
    public schema?: Array<AnalysisField>;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDatarows(datarows: Array<Array<object>>): CreateSearchAnalysisResponse {
        this['datarows'] = datarows;
        return this;
    }
    public withSchema(schema: Array<AnalysisField>): CreateSearchAnalysisResponse {
        this['schema'] = schema;
        return this;
    }
    public withSize(size: number): CreateSearchAnalysisResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): CreateSearchAnalysisResponse {
        this['total'] = total;
        return this;
    }
}