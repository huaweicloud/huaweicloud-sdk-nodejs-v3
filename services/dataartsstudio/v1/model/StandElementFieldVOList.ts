import { StandElementFieldVO } from './StandElementFieldVO';


export class StandElementFieldVOList {
    public fields?: Array<StandElementFieldVO>;
    public constructor() { 
    }
    public withFields(fields: Array<StandElementFieldVO>): StandElementFieldVOList {
        this['fields'] = fields;
        return this;
    }
}