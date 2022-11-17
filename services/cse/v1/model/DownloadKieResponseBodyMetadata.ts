

export class DownloadKieResponseBodyMetadata {
    public version?: string;
    public annotations?: object;
    public constructor() { 
    }
    public withVersion(version: string): DownloadKieResponseBodyMetadata {
        this['version'] = version;
        return this;
    }
    public withAnnotations(annotations: object): DownloadKieResponseBodyMetadata {
        this['annotations'] = annotations;
        return this;
    }
}