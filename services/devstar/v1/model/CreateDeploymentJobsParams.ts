import { CciDeploymentJobsParam } from './CciDeploymentJobsParam';
import { FGSDeploymentJobsParam } from './FGSDeploymentJobsParam';


export class CreateDeploymentJobsParams {
    private 'function'?: FGSDeploymentJobsParam;
    public cci?: CciDeploymentJobsParam;
    public constructor() { 
    }
    public withFunction(_function: FGSDeploymentJobsParam): CreateDeploymentJobsParams {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: FGSDeploymentJobsParam  | undefined) {
        this['function'] = _function;
    }
    public get _function(): FGSDeploymentJobsParam | undefined {
        return this['function'];
    }
    public withCci(cci: CciDeploymentJobsParam): CreateDeploymentJobsParams {
        this['cci'] = cci;
        return this;
    }
}