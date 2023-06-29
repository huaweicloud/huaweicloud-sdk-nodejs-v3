import { ObsObjInfo } from './ObsObjInfo';


export class ConcatInfo {
    public inputs?: Array<ObsObjInfo>;
    public constructor() { 
    }
    public withInputs(inputs: Array<ObsObjInfo>): ConcatInfo {
        this['inputs'] = inputs;
        return this;
    }
}