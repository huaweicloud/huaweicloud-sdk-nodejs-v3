import { LivePlayingScriptInfo } from './LivePlayingScriptInfo';


export class ScriptCommand {
    private 'room_id'?: string;
    private 'job_id'?: string;
    private 'command_id'?: string;
    private 'scene_scripts'?: Array<LivePlayingScriptInfo>;
    public constructor() { 
    }
    public withRoomId(roomId: string): ScriptCommand {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withJobId(jobId: string): ScriptCommand {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCommandId(commandId: string): ScriptCommand {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string  | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId(): string | undefined {
        return this['command_id'];
    }
    public withSceneScripts(sceneScripts: Array<LivePlayingScriptInfo>): ScriptCommand {
        this['scene_scripts'] = sceneScripts;
        return this;
    }
    public set sceneScripts(sceneScripts: Array<LivePlayingScriptInfo>  | undefined) {
        this['scene_scripts'] = sceneScripts;
    }
    public get sceneScripts(): Array<LivePlayingScriptInfo> | undefined {
        return this['scene_scripts'];
    }
}