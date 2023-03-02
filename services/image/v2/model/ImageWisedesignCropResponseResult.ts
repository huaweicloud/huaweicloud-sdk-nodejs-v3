

export class ImageWisedesignCropResponseResult {
    public box?: Array<number>;
    private 'image_base64'?: string | undefined;
    private 'task_id'?: string | undefined;
    public constructor() { 
    }
    public withBox(box: Array<number>): ImageWisedesignCropResponseResult {
        this['box'] = box;
        return this;
    }
    public withImageBase64(imageBase64: string): ImageWisedesignCropResponseResult {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withTaskId(taskId: string): ImageWisedesignCropResponseResult {
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