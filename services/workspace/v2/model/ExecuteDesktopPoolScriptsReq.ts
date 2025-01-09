

export class ExecuteDesktopPoolScriptsReq {
    private 'script_ids'?: Array<string>;
    private 'gray_count'?: number;
    private 'gray_desktop_ids'?: Array<string>;
    private 'gray_fail_threshold'?: number;
    private 'pre_start'?: string;
    private 'post_finish'?: string;
    private 'command_content'?: string;
    private 'command_type'?: ExecuteDesktopPoolScriptsReqCommandTypeEnum | string;
    private 'execution_timeout'?: number;
    public constructor() { 
    }
    public withScriptIds(scriptIds: Array<string>): ExecuteDesktopPoolScriptsReq {
        this['script_ids'] = scriptIds;
        return this;
    }
    public set scriptIds(scriptIds: Array<string>  | undefined) {
        this['script_ids'] = scriptIds;
    }
    public get scriptIds(): Array<string> | undefined {
        return this['script_ids'];
    }
    public withGrayCount(grayCount: number): ExecuteDesktopPoolScriptsReq {
        this['gray_count'] = grayCount;
        return this;
    }
    public set grayCount(grayCount: number  | undefined) {
        this['gray_count'] = grayCount;
    }
    public get grayCount(): number | undefined {
        return this['gray_count'];
    }
    public withGrayDesktopIds(grayDesktopIds: Array<string>): ExecuteDesktopPoolScriptsReq {
        this['gray_desktop_ids'] = grayDesktopIds;
        return this;
    }
    public set grayDesktopIds(grayDesktopIds: Array<string>  | undefined) {
        this['gray_desktop_ids'] = grayDesktopIds;
    }
    public get grayDesktopIds(): Array<string> | undefined {
        return this['gray_desktop_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): ExecuteDesktopPoolScriptsReq {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withPreStart(preStart: string): ExecuteDesktopPoolScriptsReq {
        this['pre_start'] = preStart;
        return this;
    }
    public set preStart(preStart: string  | undefined) {
        this['pre_start'] = preStart;
    }
    public get preStart(): string | undefined {
        return this['pre_start'];
    }
    public withPostFinish(postFinish: string): ExecuteDesktopPoolScriptsReq {
        this['post_finish'] = postFinish;
        return this;
    }
    public set postFinish(postFinish: string  | undefined) {
        this['post_finish'] = postFinish;
    }
    public get postFinish(): string | undefined {
        return this['post_finish'];
    }
    public withCommandContent(commandContent: string): ExecuteDesktopPoolScriptsReq {
        this['command_content'] = commandContent;
        return this;
    }
    public set commandContent(commandContent: string  | undefined) {
        this['command_content'] = commandContent;
    }
    public get commandContent(): string | undefined {
        return this['command_content'];
    }
    public withCommandType(commandType: ExecuteDesktopPoolScriptsReqCommandTypeEnum | string): ExecuteDesktopPoolScriptsReq {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: ExecuteDesktopPoolScriptsReqCommandTypeEnum | string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): ExecuteDesktopPoolScriptsReqCommandTypeEnum | string | undefined {
        return this['command_type'];
    }
    public withExecutionTimeout(executionTimeout: number): ExecuteDesktopPoolScriptsReq {
        this['execution_timeout'] = executionTimeout;
        return this;
    }
    public set executionTimeout(executionTimeout: number  | undefined) {
        this['execution_timeout'] = executionTimeout;
    }
    public get executionTimeout(): number | undefined {
        return this['execution_timeout'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteDesktopPoolScriptsReqCommandTypeEnum {
    POWERSHELL = 'POWERSHELL',
    BAT = 'BAT',
    SHELL = 'SHELL'
}
