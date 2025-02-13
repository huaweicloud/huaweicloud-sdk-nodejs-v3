import { LifeCycleConfigurationExec } from './LifeCycleConfigurationExec';


export class ConfigurationResponseDataSpecPostStart {
    public exec?: LifeCycleConfigurationExec;
    public constructor() { 
    }
    public withExec(exec: LifeCycleConfigurationExec): ConfigurationResponseDataSpecPostStart {
        this['exec'] = exec;
        return this;
    }
}