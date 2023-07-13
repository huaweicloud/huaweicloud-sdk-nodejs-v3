import { IvsExtentionByIdCardImageRequestBodyData } from './IvsExtentionByIdCardImageRequestBodyData';
import { Meta } from './Meta';


export class IvsExtentionByIdCardImageRequestBody {
    public meta: Meta;
    public data: IvsExtentionByIdCardImageRequestBodyData;
    public constructor(meta?: any, data?: any) { 
        this['meta'] = meta;
        this['data'] = data;
    }
    public withMeta(meta: Meta): IvsExtentionByIdCardImageRequestBody {
        this['meta'] = meta;
        return this;
    }
    public withData(data: IvsExtentionByIdCardImageRequestBodyData): IvsExtentionByIdCardImageRequestBody {
        this['data'] = data;
        return this;
    }
}