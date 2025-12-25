import { Alert } from './Alert';


export class ChangeAlertRequestBody {
    private 'data_object'?: Alert;
    public constructor(dataObject?: Alert) { 
        this['data_object'] = dataObject;
    }
    public withDataObject(dataObject: Alert): ChangeAlertRequestBody {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: Alert  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): Alert | undefined {
        return this['data_object'];
    }
}