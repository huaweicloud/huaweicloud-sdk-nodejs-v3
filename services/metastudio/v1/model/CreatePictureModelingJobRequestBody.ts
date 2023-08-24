

export class CreatePictureModelingJobRequestBody {
    public file?: any;
    private 'style_id'?: string;
    public name?: string;
    private 'notify_url'?: string;
    public constructor(file?: any, styleId?: string, name?: string) { 
        this['file'] = file;
        this['style_id'] = styleId;
        this['name'] = name;
    }
    public withFile(file: any): CreatePictureModelingJobRequestBody {
        this['file'] = file;
        return this;
    }
    public withStyleId(styleId: string): CreatePictureModelingJobRequestBody {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withName(name: string): CreatePictureModelingJobRequestBody {
        this['name'] = name;
        return this;
    }
    public withNotifyUrl(notifyUrl: string): CreatePictureModelingJobRequestBody {
        this['notify_url'] = notifyUrl;
        return this;
    }
    public set notifyUrl(notifyUrl: string  | undefined) {
        this['notify_url'] = notifyUrl;
    }
    public get notifyUrl(): string | undefined {
        return this['notify_url'];
    }
}