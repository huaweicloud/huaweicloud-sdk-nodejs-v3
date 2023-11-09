

export class Project {
    public id?: string;
    public name?: string;
    private 'clone_url'?: string;
    public constructor(id?: string, name?: string, cloneUrl?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['clone_url'] = cloneUrl;
    }
    public withId(id: string): Project {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Project {
        this['name'] = name;
        return this;
    }
    public withCloneUrl(cloneUrl: string): Project {
        this['clone_url'] = cloneUrl;
        return this;
    }
    public set cloneUrl(cloneUrl: string  | undefined) {
        this['clone_url'] = cloneUrl;
    }
    public get cloneUrl(): string | undefined {
        return this['clone_url'];
    }
}