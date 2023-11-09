import { CreateIndicatorDetail } from './CreateIndicatorDetail';


export class IndicatorCreateRequest {
    private 'data_object'?: CreateIndicatorDetail;
    public constructor(dataObject?: CreateIndicatorDetail) { 
        this['data_object'] = dataObject;
    }
    public withDataObject(dataObject: CreateIndicatorDetail): IndicatorCreateRequest {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: CreateIndicatorDetail  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): CreateIndicatorDetail | undefined {
        return this['data_object'];
    }
}