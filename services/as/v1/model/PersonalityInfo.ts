

export class PersonalityInfo {
    public path?: string;
    public content?: string;
    public constructor(path?: string, content?: string) { 
        this['path'] = path;
        this['content'] = content;
    }
    public withPath(path: string): PersonalityInfo {
        this['path'] = path;
        return this;
    }
    public withContent(content: string): PersonalityInfo {
        this['content'] = content;
        return this;
    }
}