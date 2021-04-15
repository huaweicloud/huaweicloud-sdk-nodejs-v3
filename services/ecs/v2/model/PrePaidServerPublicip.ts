import { PrePaidServerEip } from './PrePaidServerEip';


export class PrePaidServerPublicip {
    public id?: string;
    public eip?: PrePaidServerEip;
    public constructor() { 
    }
    public withId(id: string): PrePaidServerPublicip {
        this['id'] = id;
        return this;
    }
    public withEip(eip: PrePaidServerEip): PrePaidServerPublicip {
        this['eip'] = eip;
        return this;
    }
}