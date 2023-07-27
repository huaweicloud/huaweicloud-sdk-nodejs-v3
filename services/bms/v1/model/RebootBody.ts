import { ServersInfoType } from './ServersInfoType';


export class RebootBody {
    public reboot?: ServersInfoType;
    public constructor(reboot?: ServersInfoType) { 
        this['reboot'] = reboot;
    }
    public withReboot(reboot: ServersInfoType): RebootBody {
        this['reboot'] = reboot;
        return this;
    }
}