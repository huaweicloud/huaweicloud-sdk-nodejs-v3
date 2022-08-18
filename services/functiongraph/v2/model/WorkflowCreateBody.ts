import { ExpressConfig } from './ExpressConfig';
import { Function } from './Function';
import { OperationState } from './OperationState';
import { Retry } from './Retry';
import { Trigger } from './Trigger';


export class WorkflowCreateBody {
    public name: string;
    public description?: string;
    public start: string;
    public triggers?: Array<Trigger>;
    public functions: Array<Function>;
    public states: Array<OperationState>;
    public constants: object;
    public retries: Array<Retry>;
    public mode?: WorkflowCreateBodyModeEnum;
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
    public withName(name: string): WorkflowCreateBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WorkflowCreateBody {
        this['description'] = description;
        return this;
    }
    public withStart(start: string): WorkflowCreateBody {
        this['start'] = start;
        return this;
    }
    public withTriggers(triggers: Array<Trigger>): WorkflowCreateBody {
        this['triggers'] = triggers;
        return this;
    }
    public withFunctions(functions: Array<Function>): WorkflowCreateBody {
        this['functions'] = functions;
        return this;
    }
    public withStates(states: Array<OperationState>): WorkflowCreateBody {
        this['states'] = states;
        return this;
    }
    public withConstants(constants: object): WorkflowCreateBody {
        this['constants'] = constants;
        return this;
    }
    public withRetries(retries: Array<Retry>): WorkflowCreateBody {
        this['retries'] = retries;
        return this;
    }
    public withMode(mode: WorkflowCreateBodyModeEnum): WorkflowCreateBody {
        this['mode'] = mode;
        return this;
    }
    public withExpressConfig(expressConfig: ExpressConfig): WorkflowCreateBody {
        this['express_config'] = expressConfig;
        return this;
    }
    public set expressConfig(expressConfig: ExpressConfig | undefined) {
        this['express_config'] = expressConfig;
    }
    public get expressConfig() {
        return this['express_config'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): WorkflowCreateBody {
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
export enum WorkflowCreateBodyModeEnum {
    NORMAL = 'NORMAL',
    EXPRESS = 'EXPRESS'
}
