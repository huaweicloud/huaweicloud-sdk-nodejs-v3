import { ResourceDetail } from './ResourceDetail';


export class ChangeResourceRequestBody {
    private 'data_object'?: ResourceDetail;
    public constructor(dataObject?: ResourceDetail) { 
        this['data_object'] = dataObject;
    }
    public withDataObject(dataObject: ResourceDetail): ChangeResourceRequestBody {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: ResourceDetail  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): ResourceDetail | undefined {
        return this['data_object'];
    }
}