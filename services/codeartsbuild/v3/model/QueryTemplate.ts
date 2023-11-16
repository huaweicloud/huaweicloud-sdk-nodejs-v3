import { CreateBuildJobSteps } from './CreateBuildJobSteps';


export class QueryTemplate {
    public steps?: Array<CreateBuildJobSteps>;
    public constructor(steps?: Array<CreateBuildJobSteps>) { 
        this['steps'] = steps;
    }
    public withSteps(steps: Array<CreateBuildJobSteps>): QueryTemplate {
        this['steps'] = steps;
        return this;
    }
}