import { CompoundMetricVO } from './CompoundMetricVO';


export class CreateDesignCompoundMetricResultData {
    public value?: CompoundMetricVO;
    public constructor() { 
    }
    public withValue(value: CompoundMetricVO): CreateDesignCompoundMetricResultData {
        this['value'] = value;
        return this;
    }
}