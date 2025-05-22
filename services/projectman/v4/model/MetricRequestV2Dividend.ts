import { MetricRequestV2DividendCustomFields } from './MetricRequestV2DividendCustomFields';


export class MetricRequestV2Dividend {
    private 'custom_fields'?: Array<MetricRequestV2DividendCustomFields>;
    public constructor() { 
    }
    public withCustomFields(customFields: Array<MetricRequestV2DividendCustomFields>): MetricRequestV2Dividend {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<MetricRequestV2DividendCustomFields>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<MetricRequestV2DividendCustomFields> | undefined {
        return this['custom_fields'];
    }
}