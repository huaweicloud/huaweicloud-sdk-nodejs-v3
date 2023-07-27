

export class ResponseInfo {
    public status?: number;
    public body?: string;
    public constructor() { 
    }
    public withStatus(status: number): ResponseInfo {
        this['status'] = status;
        return this;
    }
    public withBody(body: string): ResponseInfo {
        this['body'] = body;
        return this;
    }
}