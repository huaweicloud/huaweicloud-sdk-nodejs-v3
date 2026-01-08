

export class ExecuteScriptByDesktopTagReq {
    private 'desktop_tag'?: string;
    private 'script_ids'?: Array<string>;
    private 'gray_count'?: number;
    private 'gray_desktop_ids'?: Array<string>;
    private 'gray_fail_threshold'?: number;
    private 'pre_start'?: string;
    private 'post_finish'?: string;
    private 'command_content'?: string;
    private 'command_type'?: ExecuteScriptByDesktopTagReqCommandTypeEnum | string;
    private 'execution_timeout'?: number;
    public constructor(desktopTag?: string) { 
        this['desktop_tag'] = desktopTag;
    }
    public withDesktopTag(desktopTag: string): ExecuteScriptByDesktopTagReq {
        this['desktop_tag'] = desktopTag;
        return this;
    }
    public set desktopTag(desktopTag: string  | undefined) {
        this['desktop_tag'] = desktopTag;
    }
    public get desktopTag(): string | undefined {
        return this['desktop_tag'];
    }
    public withScriptIds(scriptIds: Array<string>): ExecuteScriptByDesktopTagReq {
        this['script_ids'] = scriptIds;
        return this;
    }
    public set scriptIds(scriptIds: Array<string>  | undefined) {
        this['script_ids'] = scriptIds;
    }
    public get scriptIds(): Array<string> | undefined {
        return this['script_ids'];
    }
    public withGrayCount(grayCount: number): ExecuteScriptByDesktopTagReq {
        this['gray_count'] = grayCount;
        return this;
    }
    public set grayCount(grayCount: number  | undefined) {
        this['gray_count'] = grayCount;
    }
    public get grayCount(): number | undefined {
        return this['gray_count'];
    }
    public withGrayDesktopIds(grayDesktopIds: Array<string>): ExecuteScriptByDesktopTagReq {
        this['gray_desktop_ids'] = grayDesktopIds;
        return this;
    }
    public set grayDesktopIds(grayDesktopIds: Array<string>  | undefined) {
        this['gray_desktop_ids'] = grayDesktopIds;
    }
    public get grayDesktopIds(): Array<string> | undefined {
        return this['gray_desktop_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): ExecuteScriptByDesktopTagReq {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withPreStart(preStart: string): ExecuteScriptByDesktopTagReq {
        this['pre_start'] = preStart;
        return this;
    }
    public set preStart(preStart: string  | undefined) {
        this['pre_start'] = preStart;
    }
    public get preStart(): string | undefined {
        return this['pre_start'];
    }
    public withPostFinish(postFinish: string): ExecuteScriptByDesktopTagReq {
        this['post_finish'] = postFinish;
        return this;
    }
    public set postFinish(postFinish: string  | undefined) {
        this['post_finish'] = postFinish;
    }
    public get postFinish(): string | undefined {
        return this['post_finish'];
    }
    public withCommandContent(commandContent: string): ExecuteScriptByDesktopTagReq {
        this['command_content'] = commandContent;
        return this;
    }
    public set commandContent(commandContent: string  | undefined) {
        this['command_content'] = commandContent;
    }
    public get commandContent(): string | undefined {
        return this['command_content'];
    }
    public withCommandType(commandType: ExecuteScriptByDesktopTagReqCommandTypeEnum | string): ExecuteScriptByDesktopTagReq {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: ExecuteScriptByDesktopTagReqCommandTypeEnum | string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): ExecuteScriptByDesktopTagReqCommandTypeEnum | string | undefined {
        return this['command_type'];
    }
    public withExecutionTimeout(executionTimeout: number): ExecuteScriptByDesktopTagReq {
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
export enum ExecuteScriptByDesktopTagReqCommandTypeEnum {
    POWERSHELL = 'POWERSHELL',
    BAT = 'BAT',
    SHELL = 'SHELL'
}
