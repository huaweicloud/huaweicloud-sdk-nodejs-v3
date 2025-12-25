import { IndicatorDataObjectDetail } from './IndicatorDataObjectDetail';


export class UpdateIndicatorRequestBody {
    private 'data_object'?: IndicatorDataObjectDetail;
    public constructor() { 
    }
    public withDataObject(dataObject: IndicatorDataObjectDetail): UpdateIndicatorRequestBody {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: IndicatorDataObjectDetail  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): IndicatorDataObjectDetail | undefined {
        return this['data_object'];
    }
}