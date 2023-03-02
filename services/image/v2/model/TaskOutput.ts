import { TaskOutputObs } from './TaskOutputObs';


export class TaskOutput {
    public obs: TaskOutputObs;
    public constructor(obs?: any) { 
        this['obs'] = obs;
    }
    public withObs(obs: TaskOutputObs): TaskOutput {
        this['obs'] = obs;
        return this;
    }
}