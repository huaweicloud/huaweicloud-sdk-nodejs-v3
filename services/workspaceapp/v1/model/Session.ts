import { Sbc } from './Sbc';


export class Session {
    public sbc?: Sbc;
    public constructor() { 
    }
    public withSbc(sbc: Sbc): Session {
        this['sbc'] = sbc;
        return this;
    }
}