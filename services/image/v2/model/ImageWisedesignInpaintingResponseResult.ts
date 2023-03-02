

export class ImageWisedesignInpaintingResponseResult {
    private 'image_base64'?: string | undefined;
    public action?: string;
    private 'task_id'?: string | undefined;
    public constructor() { 
    }
    public withImageBase64(imageBase64: string): ImageWisedesignInpaintingResponseResult {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withAction(action: string): ImageWisedesignInpaintingResponseResult {
        this['action'] = action;
        return this;
    }
    public withTaskId(taskId: string): ImageWisedesignInpaintingResponseResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}