import { LifeCycleConfigurationExec } from './LifeCycleConfigurationExec';


export class ConfigurationRequestDataSpecPostStart {
    public exec?: LifeCycleConfigurationExec;
    public constructor() { 
    }
    public withExec(exec: LifeCycleConfigurationExec): ConfigurationRequestDataSpecPostStart {
        this['exec'] = exec;
        return this;
    }
}