import { CreateTemplateSteps } from './CreateTemplateSteps';


export class CreateTemplate {
    public steps?: Array<CreateTemplateSteps>;
    public constructor(steps?: Array<CreateTemplateSteps>) { 
        this['steps'] = steps;
    }
    public withSteps(steps: Array<CreateTemplateSteps>): CreateTemplate {
        this['steps'] = steps;
        return this;
    }
}