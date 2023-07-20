import { MsdtcHostOption } from './MsdtcHostOption';


export class AddMsdtcRequestBody {
    public hosts?: Array<MsdtcHostOption>;
    public constructor() { 
    }
    public withHosts(hosts: Array<MsdtcHostOption>): AddMsdtcRequestBody {
        this['hosts'] = hosts;
        return this;
    }
}