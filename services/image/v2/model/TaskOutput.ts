import { TaskOutputObs } from './TaskOutputObs';


export class TaskOutput {
    public obs?: TaskOutputObs;
    public constructor(obs?: TaskOutputObs) { 
        this['obs'] = obs;
    }
    public withObs(obs: TaskOutputObs): TaskOutput {
        this['obs'] = obs;
        return this;
    }
}