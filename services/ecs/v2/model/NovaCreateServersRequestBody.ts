import { NovaCreateServersOption } from './NovaCreateServersOption';
import { NovaCreateServersSchedulerHint } from './NovaCreateServersSchedulerHint';


export class NovaCreateServersRequestBody {
    public server: NovaCreateServersOption;
    private 'os:scheduler_hints'?: NovaCreateServersSchedulerHint | undefined;
    public constructor(server?: any) { 
        this['server'] = server;
    }
    public withServer(server: NovaCreateServersOption): NovaCreateServersRequestBody {
        this['server'] = server;
        return this;
    }
    public withOsSchedulerHints(osSchedulerHints: NovaCreateServersSchedulerHint): NovaCreateServersRequestBody {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: NovaCreateServersSchedulerHint | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints() {
        return this['os:scheduler_hints'];
    }
}