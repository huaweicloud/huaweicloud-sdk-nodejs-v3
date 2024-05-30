import { BizMetricVO } from './BizMetricVO';


export class CreateBizMetricResultData {
    public value?: BizMetricVO;
    public constructor() { 
    }
    public withValue(value: BizMetricVO): CreateBizMetricResultData {
        this['value'] = value;
        return this;
    }
}