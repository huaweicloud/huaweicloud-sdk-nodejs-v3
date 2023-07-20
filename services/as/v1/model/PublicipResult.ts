import { EipResult } from './EipResult';


export class PublicipResult {
    public eip?: EipResult;
    public constructor() { 
    }
    public withEip(eip: EipResult): PublicipResult {
        this['eip'] = eip;
        return this;
    }
}