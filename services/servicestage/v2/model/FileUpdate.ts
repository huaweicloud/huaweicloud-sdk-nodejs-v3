

export class FileUpdate {
    public message?: string;
    public content?: string;
    public sha?: string;
    public constructor(message?: string, content?: string, sha?: string) { 
        this['message'] = message;
        this['content'] = content;
        this['sha'] = sha;
    }
    public withMessage(message: string): FileUpdate {
        this['message'] = message;
        return this;
    }
    public withContent(content: string): FileUpdate {
        this['content'] = content;
        return this;
    }
    public withSha(sha: string): FileUpdate {
        this['sha'] = sha;
        return this;
    }
}