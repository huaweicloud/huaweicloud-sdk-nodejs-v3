import { LabelEntity } from './LabelEntity';


export class LabelListResponse {
    public data?: Array<LabelEntity>;
    public total?: number;
    public constructor() { 
    }
    public withData(data: Array<LabelEntity>): LabelListResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): LabelListResponse {
        this['total'] = total;
        return this;
    }
}