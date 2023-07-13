import { UpdateDesired } from './UpdateDesired';


export class UpdateDesireds {
    public shadow?: Array<UpdateDesired>;
    public constructor() { 
    }
    public withShadow(shadow: Array<UpdateDesired>): UpdateDesireds {
        this['shadow'] = shadow;
        return this;
    }
}