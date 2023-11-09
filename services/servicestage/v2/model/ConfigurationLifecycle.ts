import { LifecycleEntrypoint } from './LifecycleEntrypoint';
import { LifecycleProcess } from './LifecycleProcess';


export class ConfigurationLifecycle {
    public entrypoint?: LifecycleEntrypoint;
    private 'post-start'?: LifecycleProcess;
    private 'pre-stop'?: LifecycleProcess;
    public constructor() { 
    }
    public withEntrypoint(entrypoint: LifecycleEntrypoint): ConfigurationLifecycle {
        this['entrypoint'] = entrypoint;
        return this;
    }
    public withPostStart(postStart: LifecycleProcess): ConfigurationLifecycle {
        this['post-start'] = postStart;
        return this;
    }
    public set postStart(postStart: LifecycleProcess  | undefined) {
        this['post-start'] = postStart;
    }
    public get postStart(): LifecycleProcess | undefined {
        return this['post-start'];
    }
    public withPreStop(preStop: LifecycleProcess): ConfigurationLifecycle {
        this['pre-stop'] = preStop;
        return this;
    }
    public set preStop(preStop: LifecycleProcess  | undefined) {
        this['pre-stop'] = preStop;
    }
    public get preStop(): LifecycleProcess | undefined {
        return this['pre-stop'];
    }
}