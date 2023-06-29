import { BasicTaskInfo } from './BasicTaskInfo';
import { ObsObjInfo } from './ObsObjInfo';
import { TracksInfo } from './TracksInfo';


export class ResetTracksTaskInfo {
    private 'task_id'?: string | undefined;
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public output?: ObsObjInfo;
    public description?: string;
    private 'output_filename'?: string | undefined;
    private 'tracks_info'?: Array<TracksInfo> | undefined;
    public input?: ObsObjInfo;
    public constructor() { 
    }
    public withTaskId(taskId: string): ResetTracksTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: string): ResetTracksTaskInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ResetTracksTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEndTime(endTime: string): ResetTracksTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withOutput(output: ObsObjInfo): ResetTracksTaskInfo {
        this['output'] = output;
        return this;
    }
    public withDescription(description: string): ResetTracksTaskInfo {
        this['description'] = description;
        return this;
    }
    public withOutputFilename(outputFilename: string): ResetTracksTaskInfo {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename() {
        return this['output_filename'];
    }
    public withTracksInfo(tracksInfo: Array<TracksInfo>): ResetTracksTaskInfo {
        this['tracks_info'] = tracksInfo;
        return this;
    }
    public set tracksInfo(tracksInfo: Array<TracksInfo> | undefined) {
        this['tracks_info'] = tracksInfo;
    }
    public get tracksInfo() {
        return this['tracks_info'];
    }
    public withInput(input: ObsObjInfo): ResetTracksTaskInfo {
        this['input'] = input;
        return this;
    }
}