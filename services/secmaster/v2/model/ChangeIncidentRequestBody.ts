import { Incident } from './Incident';


export class ChangeIncidentRequestBody {
    private 'batch_ids'?: Array<string>;
    private 'data_object'?: Incident;
    public constructor() { 
    }
    public withBatchIds(batchIds: Array<string>): ChangeIncidentRequestBody {
        this['batch_ids'] = batchIds;
        return this;
    }
    public set batchIds(batchIds: Array<string>  | undefined) {
        this['batch_ids'] = batchIds;
    }
    public get batchIds(): Array<string> | undefined {
        return this['batch_ids'];
    }
    public withDataObject(dataObject: Incident): ChangeIncidentRequestBody {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: Incident  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): Incident | undefined {
        return this['data_object'];
    }
}