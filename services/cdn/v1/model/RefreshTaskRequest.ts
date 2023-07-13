import { RefreshTaskRequestBody } from './RefreshTaskRequestBody';


export class RefreshTaskRequest {
    private 'refresh_task': RefreshTaskRequestBody | undefined;
    public constructor(refreshTask?: any) { 
        this['refresh_task'] = refreshTask;
    }
    public withRefreshTask(refreshTask: RefreshTaskRequestBody): RefreshTaskRequest {
        this['refresh_task'] = refreshTask;
        return this;
    }
    public set refreshTask(refreshTask: RefreshTaskRequestBody | undefined) {
        this['refresh_task'] = refreshTask;
    }
    public get refreshTask() {
        return this['refresh_task'];
    }
}