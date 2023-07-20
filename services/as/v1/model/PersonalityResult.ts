

export class PersonalityResult {
    public path?: string;
    public content?: string;
    public constructor() { 
    }
    public withPath(path: string): PersonalityResult {
        this['path'] = path;
        return this;
    }
    public withContent(content: string): PersonalityResult {
        this['content'] = content;
        return this;
    }
}