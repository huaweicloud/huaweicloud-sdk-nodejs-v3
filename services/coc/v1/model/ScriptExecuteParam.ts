import { ScriptExecuteInputParam } from './ScriptExecuteInputParam';


export class ScriptExecuteParam {
    public resourceful?: boolean;
    public timeout?: number;
    private 'success_rate'?: number;
    private 'execute_user'?: string;
    private 'script_params'?: Array<ScriptExecuteInputParam>;
    public constructor(timeout?: number, successRate?: number, executeUser?: string) { 
        this['timeout'] = timeout;
        this['success_rate'] = successRate;
        this['execute_user'] = executeUser;
    }
    public withResourceful(resourceful: boolean): ScriptExecuteParam {
        this['resourceful'] = resourceful;
        return this;
    }
    public withTimeout(timeout: number): ScriptExecuteParam {
        this['timeout'] = timeout;
        return this;
    }
    public withSuccessRate(successRate: number): ScriptExecuteParam {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: number  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): number | undefined {
        return this['success_rate'];
    }
    public withExecuteUser(executeUser: string): ScriptExecuteParam {
        this['execute_user'] = executeUser;
        return this;
    }
    public set executeUser(executeUser: string  | undefined) {
        this['execute_user'] = executeUser;
    }
    public get executeUser(): string | undefined {
        return this['execute_user'];
    }
    public withScriptParams(scriptParams: Array<ScriptExecuteInputParam>): ScriptExecuteParam {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<ScriptExecuteInputParam>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<ScriptExecuteInputParam> | undefined {
        return this['script_params'];
    }
}