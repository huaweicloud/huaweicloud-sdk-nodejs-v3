import { IvsExtentionByNameAndIdRequestBodyData } from './IvsExtentionByNameAndIdRequestBodyData';
import { Meta } from './Meta';


export class IvsExtentionByNameAndIdRequestBody {
    public meta?: Meta;
    public data?: IvsExtentionByNameAndIdRequestBodyData;
    public constructor(meta?: Meta, data?: IvsExtentionByNameAndIdRequestBodyData) { 
        this['meta'] = meta;
        this['data'] = data;
    }
    public withMeta(meta: Meta): IvsExtentionByNameAndIdRequestBody {
        this['meta'] = meta;
        return this;
    }
    public withData(data: IvsExtentionByNameAndIdRequestBodyData): IvsExtentionByNameAndIdRequestBody {
        this['data'] = data;
        return this;
    }
}