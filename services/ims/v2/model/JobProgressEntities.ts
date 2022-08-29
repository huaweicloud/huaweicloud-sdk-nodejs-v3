

export class JobProgressEntities {
    private 'image_id'?: string | undefined;
    private 'current_task'?: string | undefined;
    private 'image_name'?: string | undefined;
    private 'process_percent'?: number | undefined;
    public subJobId?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): JobProgressEntities {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withCurrentTask(currentTask: string): JobProgressEntities {
        this['current_task'] = currentTask;
        return this;
    }
    public set currentTask(currentTask: string | undefined) {
        this['current_task'] = currentTask;
    }
    public get currentTask() {
        return this['current_task'];
    }
    public withImageName(imageName: string): JobProgressEntities {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
    public withProcessPercent(processPercent: number): JobProgressEntities {
        this['process_percent'] = processPercent;
        return this;
    }
    public set processPercent(processPercent: number | undefined) {
        this['process_percent'] = processPercent;
    }
    public get processPercent() {
        return this['process_percent'];
    }
    public withSubJobId(subJobId: string): JobProgressEntities {
        this['subJobId'] = subJobId;
        return this;
    }
}