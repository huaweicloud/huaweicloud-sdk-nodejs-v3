import { Eip } from './Eip';


export class PublicIp {
    public id?: string;
    public eip?: Eip;
    public constructor() { 
    }
    public withId(id: string): PublicIp {
        this['id'] = id;
        return this;
    }
    public withEip(eip: Eip): PublicIp {
        this['eip'] = eip;
        return this;
    }
}