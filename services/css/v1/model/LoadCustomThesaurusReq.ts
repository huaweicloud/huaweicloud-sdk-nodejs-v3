

export class LoadCustomThesaurusReq {
    private 'bucket_name'?: string;
    private 'main_object'?: string;
    private 'stop_object'?: string;
    private 'synonym_object'?: string;
    private 'static_main_object'?: string;
    private 'static_stop_object'?: string;
    private 'extra_main_object'?: string;
    private 'extra_stop_object'?: string;
    public constructor(bucketName?: string) { 
        this['bucket_name'] = bucketName;
    }
    public withBucketName(bucketName: string): LoadCustomThesaurusReq {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withMainObject(mainObject: string): LoadCustomThesaurusReq {
        this['main_object'] = mainObject;
        return this;
    }
    public set mainObject(mainObject: string  | undefined) {
        this['main_object'] = mainObject;
    }
    public get mainObject(): string | undefined {
        return this['main_object'];
    }
    public withStopObject(stopObject: string): LoadCustomThesaurusReq {
        this['stop_object'] = stopObject;
        return this;
    }
    public set stopObject(stopObject: string  | undefined) {
        this['stop_object'] = stopObject;
    }
    public get stopObject(): string | undefined {
        return this['stop_object'];
    }
    public withSynonymObject(synonymObject: string): LoadCustomThesaurusReq {
        this['synonym_object'] = synonymObject;
        return this;
    }
    public set synonymObject(synonymObject: string  | undefined) {
        this['synonym_object'] = synonymObject;
    }
    public get synonymObject(): string | undefined {
        return this['synonym_object'];
    }
    public withStaticMainObject(staticMainObject: string): LoadCustomThesaurusReq {
        this['static_main_object'] = staticMainObject;
        return this;
    }
    public set staticMainObject(staticMainObject: string  | undefined) {
        this['static_main_object'] = staticMainObject;
    }
    public get staticMainObject(): string | undefined {
        return this['static_main_object'];
    }
    public withStaticStopObject(staticStopObject: string): LoadCustomThesaurusReq {
        this['static_stop_object'] = staticStopObject;
        return this;
    }
    public set staticStopObject(staticStopObject: string  | undefined) {
        this['static_stop_object'] = staticStopObject;
    }
    public get staticStopObject(): string | undefined {
        return this['static_stop_object'];
    }
    public withExtraMainObject(extraMainObject: string): LoadCustomThesaurusReq {
        this['extra_main_object'] = extraMainObject;
        return this;
    }
    public set extraMainObject(extraMainObject: string  | undefined) {
        this['extra_main_object'] = extraMainObject;
    }
    public get extraMainObject(): string | undefined {
        return this['extra_main_object'];
    }
    public withExtraStopObject(extraStopObject: string): LoadCustomThesaurusReq {
        this['extra_stop_object'] = extraStopObject;
        return this;
    }
    public set extraStopObject(extraStopObject: string  | undefined) {
        this['extra_stop_object'] = extraStopObject;
    }
    public get extraStopObject(): string | undefined {
        return this['extra_stop_object'];
    }
}