import { PageRespInfo } from './PageRespInfo';


export class DetailInfo {
    public response?: PageRespInfo;
    public constructor() { 
    }
    public withResponse(response: PageRespInfo): DetailInfo {
        this['response'] = response;
        return this;
    }
}