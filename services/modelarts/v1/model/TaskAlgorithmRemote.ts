import { TaskAlgorithmRemoteObs } from './TaskAlgorithmRemoteObs';


export class TaskAlgorithmRemote {
    public obs?: TaskAlgorithmRemoteObs;
    public constructor(obs?: TaskAlgorithmRemoteObs) { 
        this['obs'] = obs;
    }
    public withObs(obs: TaskAlgorithmRemoteObs): TaskAlgorithmRemote {
        this['obs'] = obs;
        return this;
    }
}