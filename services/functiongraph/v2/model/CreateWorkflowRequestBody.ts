import { Function } from './Function';
import { OperationState } from './OperationState';
import { Retry } from './Retry';
import { Trigger } from './Trigger';


export class CreateWorkflowRequestBody {
    public name?: string;
    public description?: string;
    public triggers?: Array<Trigger>;
    public start?: string;
    public functions?: Array<Function>;
    public states?: Array<OperationState>;
    public constants?: object;
    public retries?: Array<Retry>;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): CreateWorkflowRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateWorkflowRequestBody {
        this['description'] = description;
        return this;
    }
    public withTriggers(triggers: Array<Trigger>): CreateWorkflowRequestBody {
        this['triggers'] = triggers;
        return this;
    }
    public withStart(start: string): CreateWorkflowRequestBody {
        this['start'] = start;
        return this;
    }
    public withFunctions(functions: Array<Function>): CreateWorkflowRequestBody {
        this['functions'] = functions;
        return this;
    }
    public withStates(states: Array<OperationState>): CreateWorkflowRequestBody {
        this['states'] = states;
        return this;
    }
    public withConstants(constants: object): CreateWorkflowRequestBody {
        this['constants'] = constants;
        return this;
    }
    public withRetries(retries: Array<Retry>): CreateWorkflowRequestBody {
        this['retries'] = retries;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateWorkflowRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}