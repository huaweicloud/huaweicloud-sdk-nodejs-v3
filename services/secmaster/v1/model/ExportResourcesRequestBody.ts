import { ResourceDataobjectSearch } from './ResourceDataobjectSearch';


export class ExportResourcesRequestBody {
    private 'data_object_filters_form'?: ResourceDataobjectSearch;
    public title?: Array<string>;
    public constructor(dataObjectFiltersForm?: ResourceDataobjectSearch, title?: Array<string>) { 
        this['data_object_filters_form'] = dataObjectFiltersForm;
        this['title'] = title;
    }
    public withDataObjectFiltersForm(dataObjectFiltersForm: ResourceDataobjectSearch): ExportResourcesRequestBody {
        this['data_object_filters_form'] = dataObjectFiltersForm;
        return this;
    }
    public set dataObjectFiltersForm(dataObjectFiltersForm: ResourceDataobjectSearch  | undefined) {
        this['data_object_filters_form'] = dataObjectFiltersForm;
    }
    public get dataObjectFiltersForm(): ResourceDataobjectSearch | undefined {
        return this['data_object_filters_form'];
    }
    public withTitle(title: Array<string>): ExportResourcesRequestBody {
        this['title'] = title;
        return this;
    }
}