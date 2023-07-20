import { IvsStandardByVideoAndNameAndIdRequestBodyData } from './IvsStandardByVideoAndNameAndIdRequestBodyData';
import { Meta } from './Meta';


export class IvsStandardByVideoAndNameAndIdRequestBody {
    public meta?: Meta;
    public data?: IvsStandardByVideoAndNameAndIdRequestBodyData;
    public constructor(meta?: Meta, data?: IvsStandardByVideoAndNameAndIdRequestBodyData) { 
        this['meta'] = meta;
        this['data'] = data;
    }
    public withMeta(meta: Meta): IvsStandardByVideoAndNameAndIdRequestBody {
        this['meta'] = meta;
        return this;
    }
    public withData(data: IvsStandardByVideoAndNameAndIdRequestBodyData): IvsStandardByVideoAndNameAndIdRequestBody {
        this['data'] = data;
        return this;
    }
}