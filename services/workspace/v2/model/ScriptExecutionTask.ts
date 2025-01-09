import { Script } from './Script';


export class ScriptExecutionTask {
    public id?: string;
    private 'desktop_pool_id'?: string;
    private 'desktop_pool_name'?: string;
    public scripts?: Array<Script>;
    private 'command_content'?: string;
    private 'command_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: ScriptExecutionTaskStatusEnum | string;
    private 'success_num'?: number;
    private 'failed_num'?: number;
    private 'skip_num'?: number;
    public constructor() { 
    }
    public withId(id: string): ScriptExecutionTask {
        this['id'] = id;
        return this;
    }
    public withDesktopPoolId(desktopPoolId: string): ScriptExecutionTask {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopPoolName(desktopPoolName: string): ScriptExecutionTask {
        this['desktop_pool_name'] = desktopPoolName;
        return this;
    }
    public set desktopPoolName(desktopPoolName: string  | undefined) {
        this['desktop_pool_name'] = desktopPoolName;
    }
    public get desktopPoolName(): string | undefined {
        return this['desktop_pool_name'];
    }
    public withScripts(scripts: Array<Script>): ScriptExecutionTask {
        this['scripts'] = scripts;
        return this;
    }
    public withCommandContent(commandContent: string): ScriptExecutionTask {
        this['command_content'] = commandContent;
        return this;
    }
    public set commandContent(commandContent: string  | undefined) {
        this['command_content'] = commandContent;
    }
    public get commandContent(): string | undefined {
        return this['command_content'];
    }
    public withCommandType(commandType: string): ScriptExecutionTask {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): string | undefined {
        return this['command_type'];
    }
    public withStartTime(startTime: string): ScriptExecutionTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScriptExecutionTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: ScriptExecutionTaskStatusEnum | string): ScriptExecutionTask {
        this['status'] = status;
        return this;
    }
    public withSuccessNum(successNum: number): ScriptExecutionTask {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailedNum(failedNum: number): ScriptExecutionTask {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withSkipNum(skipNum: number): ScriptExecutionTask {
        this['skip_num'] = skipNum;
        return this;
    }
    public set skipNum(skipNum: number  | undefined) {
        this['skip_num'] = skipNum;
    }
    public get skipNum(): number | undefined {
        return this['skip_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptExecutionTaskStatusEnum {
    FINISH = 'FINISH',
    FAILED = 'FAILED',
    RUNNING = 'RUNNING',
    INIT = 'INIT'
}
