

export class DeleteConfigSetRequest {
    public configsetid?: string;
    public constructor(configsetid?: string) { 
        this['configsetid'] = configsetid;
    }
    public withConfigsetid(configsetid: string): DeleteConfigSetRequest {
        this['configsetid'] = configsetid;
        return this;
    }
}