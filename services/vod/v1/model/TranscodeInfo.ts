import { Output } from './Output';


export class TranscodeInfo {
    private 'template_group_name'?: string;
    public output?: Array<Output>;
    private 'exec_desc'?: string;
    private 'transcode_status'?: string;
    public constructor(templateGroupName?: string, output?: Array<Output>) { 
        this['template_group_name'] = templateGroupName;
        this['output'] = output;
    }
    public withTemplateGroupName(templateGroupName: string): TranscodeInfo {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string  | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName(): string | undefined {
        return this['template_group_name'];
    }
    public withOutput(output: Array<Output>): TranscodeInfo {
        this['output'] = output;
        return this;
    }
    public withExecDesc(execDesc: string): TranscodeInfo {
        this['exec_desc'] = execDesc;
        return this;
    }
    public set execDesc(execDesc: string  | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc(): string | undefined {
        return this['exec_desc'];
    }
    public withTranscodeStatus(transcodeStatus: string): TranscodeInfo {
        this['transcode_status'] = transcodeStatus;
        return this;
    }
    public set transcodeStatus(transcodeStatus: string  | undefined) {
        this['transcode_status'] = transcodeStatus;
    }
    public get transcodeStatus(): string | undefined {
        return this['transcode_status'];
    }
}