import { CompoundMetricVO } from './CompoundMetricVO';


export class UpdateDesignCompoundMetricResultData {
    public value?: CompoundMetricVO;
    public constructor() { 
    }
    public withValue(value: CompoundMetricVO): UpdateDesignCompoundMetricResultData {
        this['value'] = value;
        return this;
    }
}