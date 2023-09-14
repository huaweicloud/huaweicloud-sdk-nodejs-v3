import { TemplateState } from './TemplateState';
import { Workflow } from './Workflow';


export class TemplateCddl {
    public flow?: { [key: string]: { [key: string]: string; }; };
    public states?: { [key: string]: TemplateState; };
    public workflow?: Workflow;
    public constructor(flow?: { [key: string]: { [key: string]: string; }; }, states?: { [key: string]: TemplateState; }, workflow?: Workflow) { 
        this['flow'] = flow;
        this['states'] = states;
        this['workflow'] = workflow;
    }
    public withFlow(flow: { [key: string]: { [key: string]: string; }; }): TemplateCddl {
        this['flow'] = flow;
        return this;
    }
    public withStates(states: { [key: string]: TemplateState; }): TemplateCddl {
        this['states'] = states;
        return this;
    }
    public withWorkflow(workflow: Workflow): TemplateCddl {
        this['workflow'] = workflow;
        return this;
    }
}