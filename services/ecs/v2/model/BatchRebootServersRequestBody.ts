import { BatchRebootSeversOption } from './BatchRebootSeversOption';


export class BatchRebootServersRequestBody {
    public reboot?: BatchRebootSeversOption;
    public constructor(reboot?: BatchRebootSeversOption) { 
        this['reboot'] = reboot;
    }
    public withReboot(reboot: BatchRebootSeversOption): BatchRebootServersRequestBody {
        this['reboot'] = reboot;
        return this;
    }
}