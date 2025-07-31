

export class SaveBrowsingHistoryRequestInfo {
    public action?: string;
    public path?: string;
    public id?: string;
    public constructor(action?: string, path?: string) { 
        this['action'] = action;
        this['path'] = path;
    }
    public withAction(action: string): SaveBrowsingHistoryRequestInfo {
        this['action'] = action;
        return this;
    }
    public withPath(path: string): SaveBrowsingHistoryRequestInfo {
        this['path'] = path;
        return this;
    }
    public withId(id: string): SaveBrowsingHistoryRequestInfo {
        this['id'] = id;
        return this;
    }
}