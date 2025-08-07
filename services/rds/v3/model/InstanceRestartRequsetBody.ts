import { RestartConfiguration } from './RestartConfiguration';


export class InstanceRestartRequsetBody {
    public restart?: RestartConfiguration;
    public constructor(restart?: RestartConfiguration) { 
        this['restart'] = restart;
    }
    public withRestart(restart: RestartConfiguration): InstanceRestartRequsetBody {
        this['restart'] = restart;
        return this;
    }
}