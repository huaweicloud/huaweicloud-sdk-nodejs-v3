import { StandElementValueVOList } from './StandElementValueVOList';


export class ShowStandardByIdResultData {
    public value?: StandElementValueVOList;
    public constructor() { 
    }
    public withValue(value: StandElementValueVOList): ShowStandardByIdResultData {
        this['value'] = value;
        return this;
    }
}