import { AudioFile } from './AudioFile';
import { BasicTaskInfo } from './BasicTaskInfo';
import { ObsObjInfo } from './ObsObjInfo';


export class MergeChannelsTaskInfo {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public output?: ObsObjInfo;
    public description?: string;
    private 'audio_files'?: Array<AudioFile>;
    private 'output_filename'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): MergeChannelsTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): MergeChannelsTaskInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): MergeChannelsTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): MergeChannelsTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOutput(output: ObsObjInfo): MergeChannelsTaskInfo {
        this['output'] = output;
        return this;
    }
    public withDescription(description: string): MergeChannelsTaskInfo {
        this['description'] = description;
        return this;
    }
    public withAudioFiles(audioFiles: Array<AudioFile>): MergeChannelsTaskInfo {
        this['audio_files'] = audioFiles;
        return this;
    }
    public set audioFiles(audioFiles: Array<AudioFile>  | undefined) {
        this['audio_files'] = audioFiles;
    }
    public get audioFiles(): Array<AudioFile> | undefined {
        return this['audio_files'];
    }
    public withOutputFilename(outputFilename: string): MergeChannelsTaskInfo {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string  | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename(): string | undefined {
        return this['output_filename'];
    }
}