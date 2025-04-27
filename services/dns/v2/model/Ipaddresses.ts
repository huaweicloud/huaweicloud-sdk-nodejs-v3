import { IpaddressInfo } from './IpaddressInfo';


export class Ipaddresses {
    public ipaddress?: IpaddressInfo;
    public constructor(ipaddress?: IpaddressInfo) { 
        this['ipaddress'] = ipaddress;
    }
    public withIpaddress(ipaddress: IpaddressInfo): Ipaddresses {
        this['ipaddress'] = ipaddress;
        return this;
    }
}