import { MsdtcHostOption } from './MsdtcHostOption';


export class DeleteMsdtcLocalHostRequestBody {
    public hosts?: Array<MsdtcHostOption>;
    public constructor() { 
    }
    public withHosts(hosts: Array<MsdtcHostOption>): DeleteMsdtcLocalHostRequestBody {
        this['hosts'] = hosts;
        return this;
    }
}