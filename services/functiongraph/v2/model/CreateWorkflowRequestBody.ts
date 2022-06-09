import { ExpressConfig } from './ExpressConfig';
import { Function } from './Function';
import { OperationState } from './OperationState';
import { Retry } from './Retry';
import { Trigger } from './Trigger';


export class CreateWorkflowRequestBody {
    public name: string;
    public description?: string;
    public triggers?: Array<Trigger>;
    public start: string;
    public functions: Array<Function>;
    public states: Array<OperationState>;
    public constants: object;
    public retries: Array<Retry>;
    public mode?: CreateWorkflowRequestBodyModeEnum;
    private 'express_config'?: ExpressConfig | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(name?: any, start?: any, functions?: any, states?: any, constants?: any, retries?: any) { 
        this['name'] = name;
        this['start'] = start;
        this['functions'] = functions;
        this['states'] = states;
        this['constants'] = constants;
        this['retries'] = retries;
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
    public withMode(mode: CreateWorkflowRequestBodyModeEnum): CreateWorkflowRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withExpressConfig(expressConfig: ExpressConfig): CreateWorkflowRequestBody {
        this['express_config'] = expressConfig;
        return this;
    }
    public set expressConfig(expressConfig: ExpressConfig | undefined) {
        this['express_config'] = expressConfig;
    }
    public get expressConfig() {
        return this['express_config'];
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

/**
    * @export
    * @enum {string}
    */
export enum CreateWorkflowRequestBodyModeEnum {
    NORMAL = 'NORMAL',
    EXPRESS = 'EXPRESS'
}
