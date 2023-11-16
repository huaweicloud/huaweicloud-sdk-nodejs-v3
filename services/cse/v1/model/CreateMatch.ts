import { CreateMatchHeaders } from './CreateMatchHeaders';


export class CreateMatch {
    public headers?: CreateMatchHeaders;
    public constructor() { 
    }
    public withHeaders(headers: CreateMatchHeaders): CreateMatch {
        this['headers'] = headers;
        return this;
    }
}