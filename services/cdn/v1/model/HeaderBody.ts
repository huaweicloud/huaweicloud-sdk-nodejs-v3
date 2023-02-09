import { HeaderMap } from './HeaderMap';


export class HeaderBody {
    public headers?: HeaderMap;
    public constructor() { 
    }
    public withHeaders(headers: HeaderMap): HeaderBody {
        this['headers'] = headers;
        return this;
    }
}