

export class ConnectionUpdateReq {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): ConnectionUpdateReq {
        this['description'] = description;
        return this;
    }
}