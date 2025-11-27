

export class ShowConfigSetRequest {
    public configsetid?: string;
    public constructor(configsetid?: string) { 
        this['configsetid'] = configsetid;
    }
    public withConfigsetid(configsetid: string): ShowConfigSetRequest {
        this['configsetid'] = configsetid;
        return this;
    }
}