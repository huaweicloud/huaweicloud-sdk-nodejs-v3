import { DataobjectSearch } from './DataobjectSearch';


export class CommonDataObjectExportRequest {
    private 'data_object_filters_form'?: DataobjectSearch;
    public action?: string;
    public title?: Array<string>;
    public constructor() { 
    }
    public withDataObjectFiltersForm(dataObjectFiltersForm: DataobjectSearch): CommonDataObjectExportRequest {
        this['data_object_filters_form'] = dataObjectFiltersForm;
        return this;
    }
    public set dataObjectFiltersForm(dataObjectFiltersForm: DataobjectSearch  | undefined) {
        this['data_object_filters_form'] = dataObjectFiltersForm;
    }
    public get dataObjectFiltersForm(): DataobjectSearch | undefined {
        return this['data_object_filters_form'];
    }
    public withAction(action: string): CommonDataObjectExportRequest {
        this['action'] = action;
        return this;
    }
    public withTitle(title: Array<string>): CommonDataObjectExportRequest {
        this['title'] = title;
        return this;
    }
}