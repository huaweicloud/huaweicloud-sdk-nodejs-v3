import { PreheatingTaskRequestBody } from './PreheatingTaskRequestBody';


export class PreheatingTaskRequest {
    private 'preheating_task': PreheatingTaskRequestBody | undefined;
    public constructor(preheatingTask?: any) { 
        this['preheating_task'] = preheatingTask;
    }
    public withPreheatingTask(preheatingTask: PreheatingTaskRequestBody): PreheatingTaskRequest {
        this['preheating_task'] = preheatingTask;
        return this;
    }
    public set preheatingTask(preheatingTask: PreheatingTaskRequestBody | undefined) {
        this['preheating_task'] = preheatingTask;
    }
    public get preheatingTask() {
        return this['preheating_task'];
    }
}