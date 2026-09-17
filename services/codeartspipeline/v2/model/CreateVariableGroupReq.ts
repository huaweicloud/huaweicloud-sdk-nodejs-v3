import { CreateVariableGroupReqVariables } from './CreateVariableGroupReqVariables';


export class CreateVariableGroupReq {
    public name?: string;
    public description?: string;
    public variables?: Array<CreateVariableGroupReqVariables>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateVariableGroupReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVariableGroupReq {
        this['description'] = description;
        return this;
    }
    public withVariables(variables: Array<CreateVariableGroupReqVariables>): CreateVariableGroupReq {
        this['variables'] = variables;
        return this;
    }
}