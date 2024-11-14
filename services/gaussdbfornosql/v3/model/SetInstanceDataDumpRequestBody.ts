

export class SetInstanceDataDumpRequestBody {
    private 'bucket_name'?: string;
    public action?: SetInstanceDataDumpRequestBodyActionEnum | string;
    public constructor(bucketName?: string, action?: string) { 
        this['bucket_name'] = bucketName;
        this['action'] = action;
    }
    public withBucketName(bucketName: string): SetInstanceDataDumpRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withAction(action: SetInstanceDataDumpRequestBodyActionEnum | string): SetInstanceDataDumpRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetInstanceDataDumpRequestBodyActionEnum {
    OPEN = 'open',
    CLOSE = 'close'
}
