import { CompoundMetricVO } from './CompoundMetricVO';


export class CompoundMetricVODetailData {
    public value?: CompoundMetricVO;
    public constructor() { 
    }
    public withValue(value: CompoundMetricVO): CompoundMetricVODetailData {
        this['value'] = value;
        return this;
    }
}