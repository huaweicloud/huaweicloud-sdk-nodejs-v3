import { StandElementValueVOList } from './StandElementValueVOList';


export class UpdateStandardResultData {
    public value?: StandElementValueVOList;
    public constructor() { 
    }
    public withValue(value: StandElementValueVOList): UpdateStandardResultData {
        this['value'] = value;
        return this;
    }
}