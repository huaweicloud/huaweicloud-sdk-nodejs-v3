import { JobEntitiesResult } from './JobEntitiesResult';
import { SubJobResult } from './SubJobResult';


export class JobEntities {
    private 'image_id'?: string | undefined;
    private 'current_task'?: string | undefined;
    private 'image_name'?: string | undefined;
    private 'process_percent'?: number | undefined;
    public results?: Array<JobEntitiesResult>;
    private 'sub_jobs_result'?: Array<SubJobResult> | undefined;
    private 'sub_jobs_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withImageId(imageId: string): JobEntities {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withCurrentTask(currentTask: string): JobEntities {
        this['current_task'] = currentTask;
        return this;
    }
    public set currentTask(currentTask: string | undefined) {
        this['current_task'] = currentTask;
    }
    public get currentTask() {
        return this['current_task'];
    }
    public withImageName(imageName: string): JobEntities {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
    public withProcessPercent(processPercent: number): JobEntities {
        this['process_percent'] = processPercent;
        return this;
    }
    public set processPercent(processPercent: number | undefined) {
        this['process_percent'] = processPercent;
    }
    public get processPercent() {
        return this['process_percent'];
    }
    public withResults(results: Array<JobEntitiesResult>): JobEntities {
        this['results'] = results;
        return this;
    }
    public withSubJobsResult(subJobsResult: Array<SubJobResult>): JobEntities {
        this['sub_jobs_result'] = subJobsResult;
        return this;
    }
    public set subJobsResult(subJobsResult: Array<SubJobResult> | undefined) {
        this['sub_jobs_result'] = subJobsResult;
    }
    public get subJobsResult() {
        return this['sub_jobs_result'];
    }
    public withSubJobsList(subJobsList: Array<string>): JobEntities {
        this['sub_jobs_list'] = subJobsList;
        return this;
    }
    public set subJobsList(subJobsList: Array<string> | undefined) {
        this['sub_jobs_list'] = subJobsList;
    }
    public get subJobsList() {
        return this['sub_jobs_list'];
    }
}