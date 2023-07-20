import { IvsStandardByIdCardImageRequestBodyData } from './IvsStandardByIdCardImageRequestBodyData';
import { Meta } from './Meta';


export class IvsStandardByIdCardImageRequestBody {
    public meta?: Meta;
    public data?: IvsStandardByIdCardImageRequestBodyData;
    public constructor(meta?: Meta, data?: IvsStandardByIdCardImageRequestBodyData) { 
        this['meta'] = meta;
        this['data'] = data;
    }
    public withMeta(meta: Meta): IvsStandardByIdCardImageRequestBody {
        this['meta'] = meta;
        return this;
    }
    public withData(data: IvsStandardByIdCardImageRequestBodyData): IvsStandardByIdCardImageRequestBody {
        this['data'] = data;
        return this;
    }
}