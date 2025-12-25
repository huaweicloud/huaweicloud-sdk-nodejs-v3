import { DataobjectSearch } from './DataobjectSearch';


export class ExportIncidentsRequestBody {
    private 'data_object_filters_form'?: DataobjectSearch;
    public title?: Array<string>;
    public constructor() { 
    }
    public withDataObjectFiltersForm(dataObjectFiltersForm: DataobjectSearch): ExportIncidentsRequestBody {
        this['data_object_filters_form'] = dataObjectFiltersForm;
        return this;
    }
    public set dataObjectFiltersForm(dataObjectFiltersForm: DataobjectSearch  | undefined) {
        this['data_object_filters_form'] = dataObjectFiltersForm;
    }
    public get dataObjectFiltersForm(): DataobjectSearch | undefined {
        return this['data_object_filters_form'];
    }
    public withTitle(title: Array<string>): ExportIncidentsRequestBody {
        this['title'] = title;
        return this;
    }
}