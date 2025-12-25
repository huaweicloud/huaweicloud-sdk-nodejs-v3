import { DataobjectSearch } from './DataobjectSearch';


export class ExportAlertsRequestBody {
    private 'data_object_filters_form'?: DataobjectSearch;
    public title?: Array<string>;
    public constructor() { 
    }
    public withDataObjectFiltersForm(dataObjectFiltersForm: DataobjectSearch): ExportAlertsRequestBody {
        this['data_object_filters_form'] = dataObjectFiltersForm;
        return this;
    }
    public set dataObjectFiltersForm(dataObjectFiltersForm: DataobjectSearch  | undefined) {
        this['data_object_filters_form'] = dataObjectFiltersForm;
    }
    public get dataObjectFiltersForm(): DataobjectSearch | undefined {
        return this['data_object_filters_form'];
    }
    public withTitle(title: Array<string>): ExportAlertsRequestBody {
        this['title'] = title;
        return this;
    }
}