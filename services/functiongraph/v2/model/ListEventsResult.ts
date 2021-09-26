

export class ListEventsResult {
    public id?: string;
    private 'last_modified'?: number | undefined;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ListEventsResult {
        this['id'] = id;
        return this;
    }
    public withLastModified(lastModified: number): ListEventsResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: number | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withName(name: string): ListEventsResult {
        this['name'] = name;
        return this;
    }
}