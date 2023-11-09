import { Incident } from './Incident';


export class CreateIncidentRequestBody {
    private 'data_object'?: Incident;
    public constructor() { 
    }
    public withDataObject(dataObject: Incident): CreateIncidentRequestBody {
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