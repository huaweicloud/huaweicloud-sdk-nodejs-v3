

export class ShowBucketRecord {
    public name?: string;
    public size?: string;
    public constructor() { 
    }
    public withName(name: string): ShowBucketRecord {
        this['name'] = name;
        return this;
    }
    public withSize(size: string): ShowBucketRecord {
        this['size'] = size;
        return this;
    }
}