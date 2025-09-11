import { Eip } from './Eip';


export class PublicIp {
    public eip?: Eip;
    public id?: string;
    public constructor() { 
    }
    public withEip(eip: Eip): PublicIp {
        this['eip'] = eip;
        return this;
    }
    public withId(id: string): PublicIp {
        this['id'] = id;
        return this;
    }
}