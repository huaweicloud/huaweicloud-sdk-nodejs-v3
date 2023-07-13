

export class TaskOutputObs {
    public bucket: string;
    public path: string;
    public constructor(bucket?: any, path?: any) { 
        this['bucket'] = bucket;
        this['path'] = path;
    }
    public withBucket(bucket: string): TaskOutputObs {
        this['bucket'] = bucket;
        return this;
    }
    public withPath(path: string): TaskOutputObs {
        this['path'] = path;
        return this;
    }
}