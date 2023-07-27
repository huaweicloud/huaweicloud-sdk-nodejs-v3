import { EnvVariableBase } from './EnvVariableBase';


export class EnvVariableCreate {
    private 'variable_value'?: string;
    private 'env_id'?: string;
    private 'group_id'?: string;
    private 'variable_name'?: string;
    public constructor(variableValue?: string) { 
        this['variable_value'] = variableValue;
    }
    public withVariableValue(variableValue: string): EnvVariableCreate {
        this['variable_value'] = variableValue;
        return this;
    }
    public set variableValue(variableValue: string  | undefined) {
        this['variable_value'] = variableValue;
    }
    public get variableValue(): string | undefined {
        return this['variable_value'];
    }
    public withEnvId(envId: string): EnvVariableCreate {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withGroupId(groupId: string): EnvVariableCreate {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withVariableName(variableName: string): EnvVariableCreate {
        this['variable_name'] = variableName;
        return this;
    }
    public set variableName(variableName: string  | undefined) {
        this['variable_name'] = variableName;
    }
    public get variableName(): string | undefined {
        return this['variable_name'];
    }
}