import { ResponseInfoHeader } from './ResponseInfoHeader';


export class ResponseInfo {
    public status?: number;
    public body?: string;
    public headers?: Array<ResponseInfoHeader>;
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
    public withHeaders(headers: Array<ResponseInfoHeader>): ResponseInfo {
        this['headers'] = headers;
        return this;
    }
}