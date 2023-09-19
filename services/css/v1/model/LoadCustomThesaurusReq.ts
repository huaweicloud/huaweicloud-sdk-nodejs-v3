

export class LoadCustomThesaurusReq {
    public bucketName?: string;
    public mainObject?: string;
    public stopObject?: string;
    public synonymObject?: string;
    public constructor(bucketName?: string) { 
        this['bucketName'] = bucketName;
    }
    public withBucketName(bucketName: string): LoadCustomThesaurusReq {
        this['bucketName'] = bucketName;
        return this;
    }
    public withMainObject(mainObject: string): LoadCustomThesaurusReq {
        this['mainObject'] = mainObject;
        return this;
    }
    public withStopObject(stopObject: string): LoadCustomThesaurusReq {
        this['stopObject'] = stopObject;
        return this;
    }
    public withSynonymObject(synonymObject: string): LoadCustomThesaurusReq {
        this['synonymObject'] = synonymObject;
        return this;
    }
}