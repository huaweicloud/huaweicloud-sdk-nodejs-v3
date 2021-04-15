import { BatchRebootSeversOption } from './BatchRebootSeversOption';


export class BatchRebootServersRequestBody {
    public reboot: BatchRebootSeversOption;
    public constructor(reboot?: any) { 
        this['reboot'] = reboot;
    }
    public withReboot(reboot: BatchRebootSeversOption): BatchRebootServersRequestBody {
        this['reboot'] = reboot;
        return this;
    }
}