import { IvsStandardByVideoAndIdCardImageRequestBodyData } from './IvsStandardByVideoAndIdCardImageRequestBodyData';
import { Meta } from './Meta';


export class IvsStandardByVideoAndIdCardImageRequestBody {
    public meta: Meta;
    public data: IvsStandardByVideoAndIdCardImageRequestBodyData;
    public constructor(meta?: any, data?: any) { 
        this['meta'] = meta;
        this['data'] = data;
    }
    public withMeta(meta: Meta): IvsStandardByVideoAndIdCardImageRequestBody {
        this['meta'] = meta;
        return this;
    }
    public withData(data: IvsStandardByVideoAndIdCardImageRequestBodyData): IvsStandardByVideoAndIdCardImageRequestBody {
        this['data'] = data;
        return this;
    }
}