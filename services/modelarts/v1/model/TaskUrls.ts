

export class TaskUrls {
    public task?: string;
    public url?: string;
    public constructor() { 
    }
    public withTask(task: string): TaskUrls {
        this['task'] = task;
        return this;
    }
    public withUrl(url: string): TaskUrls {
        this['url'] = url;
        return this;
    }
}