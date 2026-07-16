

export class ServerTaskLimit {
    private 'max_task'?: number;
    public constructor() { 
    }
    public withMaxTask(maxTask: number): ServerTaskLimit {
        this['max_task'] = maxTask;
        return this;
    }
    public set maxTask(maxTask: number  | undefined) {
        this['max_task'] = maxTask;
    }
    public get maxTask(): number | undefined {
        return this['max_task'];
    }
}