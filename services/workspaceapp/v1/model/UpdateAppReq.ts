import { AppStateEnum } from './AppStateEnum';


export class UpdateAppReq {
    public name?: string;
    public version?: string;
    private 'execute_path'?: string;
    private 'work_path'?: string;
    public description?: string;
    private 'command_param'?: string;
    public state?: AppStateEnum;
    private 'sandbox_enable'?: boolean;
    public constructor() { 
    }
    public withName(name: string): UpdateAppReq {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): UpdateAppReq {
        this['version'] = version;
        return this;
    }
    public withExecutePath(executePath: string): UpdateAppReq {
        this['execute_path'] = executePath;
        return this;
    }
    public set executePath(executePath: string  | undefined) {
        this['execute_path'] = executePath;
    }
    public get executePath(): string | undefined {
        return this['execute_path'];
    }
    public withWorkPath(workPath: string): UpdateAppReq {
        this['work_path'] = workPath;
        return this;
    }
    public set workPath(workPath: string  | undefined) {
        this['work_path'] = workPath;
    }
    public get workPath(): string | undefined {
        return this['work_path'];
    }
    public withDescription(description: string): UpdateAppReq {
        this['description'] = description;
        return this;
    }
    public withCommandParam(commandParam: string): UpdateAppReq {
        this['command_param'] = commandParam;
        return this;
    }
    public set commandParam(commandParam: string  | undefined) {
        this['command_param'] = commandParam;
    }
    public get commandParam(): string | undefined {
        return this['command_param'];
    }
    public withState(state: AppStateEnum): UpdateAppReq {
        this['state'] = state;
        return this;
    }
    public withSandboxEnable(sandboxEnable: boolean): UpdateAppReq {
        this['sandbox_enable'] = sandboxEnable;
        return this;
    }
    public set sandboxEnable(sandboxEnable: boolean  | undefined) {
        this['sandbox_enable'] = sandboxEnable;
    }
    public get sandboxEnable(): boolean | undefined {
        return this['sandbox_enable'];
    }
}