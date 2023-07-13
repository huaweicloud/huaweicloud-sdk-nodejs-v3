

export class TaskCallback {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): TaskCallback {
        this['url'] = url;
        return this;
    }
}