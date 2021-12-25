import { FGSDeploymentJobsParam } from './FGSDeploymentJobsParam';


export class CreateDeploymentJobsParams {
    private 'function'?: FGSDeploymentJobsParam | undefined;
    public constructor() { 
    }
    public withFunction(_function: FGSDeploymentJobsParam): CreateDeploymentJobsParams {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: FGSDeploymentJobsParam | undefined) {
        this['function'] = _function;
    }
    public get _function() {
        return this['function'];
    }
}