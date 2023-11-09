import { Alert } from './Alert';


export class ChangeAlertRequestBody {
    private 'batch_ids'?: Array<string>;
    private 'data_object'?: Alert;
    public constructor() { 
    }
    public withBatchIds(batchIds: Array<string>): ChangeAlertRequestBody {
        this['batch_ids'] = batchIds;
        return this;
    }
    public set batchIds(batchIds: Array<string>  | undefined) {
        this['batch_ids'] = batchIds;
    }
    public get batchIds(): Array<string> | undefined {
        return this['batch_ids'];
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