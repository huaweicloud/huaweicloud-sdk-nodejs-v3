import { Output } from './Output';


export class TranscodeInfo {
    private 'template_group_name': string | undefined;
    public output: Array<Output>;
    private 'exec_desc'?: string | undefined;
    private 'transcode_status'?: string | undefined;
    public constructor(templateGroupName?: any, output?: any) { 
        this['template_group_name'] = templateGroupName;
        this['output'] = output;
    }
    public withTemplateGroupName(templateGroupName: string): TranscodeInfo {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName() {
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
    public set execDesc(execDesc: string | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc() {
        return this['exec_desc'];
    }
    public withTranscodeStatus(transcodeStatus: string): TranscodeInfo {
        this['transcode_status'] = transcodeStatus;
        return this;
    }
    public set transcodeStatus(transcodeStatus: string | undefined) {
        this['transcode_status'] = transcodeStatus;
    }
    public get transcodeStatus() {
        return this['transcode_status'];
    }
}