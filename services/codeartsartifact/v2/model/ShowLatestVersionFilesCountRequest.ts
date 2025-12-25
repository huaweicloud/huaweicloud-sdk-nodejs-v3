

export class ShowLatestVersionFilesCountRequest {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): ShowLatestVersionFilesCountRequest {
        this['name'] = name;
        return this;
    }
}