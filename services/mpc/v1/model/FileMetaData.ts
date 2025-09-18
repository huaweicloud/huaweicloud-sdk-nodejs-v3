

export class FileMetaData {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): FileMetaData {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): FileMetaData {
        this['value'] = value;
        return this;
    }
}