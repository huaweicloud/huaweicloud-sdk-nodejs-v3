import { IvsStandardByNameAndIdRequestBodyData } from './IvsStandardByNameAndIdRequestBodyData';
import { Meta } from './Meta';


export class IvsStandardByNameAndIdRequestBody {
    public meta: Meta;
    public data: IvsStandardByNameAndIdRequestBodyData;
    public constructor(meta?: any, data?: any) { 
        this['meta'] = meta;
        this['data'] = data;
    }
    public withMeta(meta: Meta): IvsStandardByNameAndIdRequestBody {
        this['meta'] = meta;
        return this;
    }
    public withData(data: IvsStandardByNameAndIdRequestBodyData): IvsStandardByNameAndIdRequestBody {
        this['data'] = data;
        return this;
    }
}