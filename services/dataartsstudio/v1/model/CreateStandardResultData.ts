import { StandElementValueVOList } from './StandElementValueVOList';


export class CreateStandardResultData {
    public value?: StandElementValueVOList;
    public constructor() { 
    }
    public withValue(value: StandElementValueVOList): CreateStandardResultData {
        this['value'] = value;
        return this;
    }
}