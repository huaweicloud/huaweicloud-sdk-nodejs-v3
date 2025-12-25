import { VulnerabilityDataObjectSearch } from './VulnerabilityDataObjectSearch';


export class ExportVulnerabilitiesRequestBody {
    private 'data_object_filters_form'?: VulnerabilityDataObjectSearch;
    public title?: Array<string>;
    public constructor() { 
    }
    public withDataObjectFiltersForm(dataObjectFiltersForm: VulnerabilityDataObjectSearch): ExportVulnerabilitiesRequestBody {
        this['data_object_filters_form'] = dataObjectFiltersForm;
        return this;
    }
    public set dataObjectFiltersForm(dataObjectFiltersForm: VulnerabilityDataObjectSearch  | undefined) {
        this['data_object_filters_form'] = dataObjectFiltersForm;
    }
    public get dataObjectFiltersForm(): VulnerabilityDataObjectSearch | undefined {
        return this['data_object_filters_form'];
    }
    public withTitle(title: Array<string>): ExportVulnerabilitiesRequestBody {
        this['title'] = title;
        return this;
    }
}