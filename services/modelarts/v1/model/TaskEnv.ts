import { EnvVar } from './EnvVar';


export class TaskEnv {
    public envs?: Array<EnvVar>;
    public constructor() { 
    }
    public withEnvs(envs: Array<EnvVar>): TaskEnv {
        this['envs'] = envs;
        return this;
    }
}