import { RebootType } from './RebootType';


export class RebootCbhRequestBody {
    private 'instance_id'?: string;
    public reboot?: RebootType;
    public constructor(instanceId?: string, reboot?: RebootType) { 
        this['instance_id'] = instanceId;
        this['reboot'] = reboot;
    }
    public withInstanceId(instanceId: string): RebootCbhRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withReboot(reboot: RebootType): RebootCbhRequestBody {
        this['reboot'] = reboot;
        return this;
    }
}