import { ResponseInfo } from './ResponseInfo';


export class ResponsesCreate {
    public name?: string;
    public responses?: { [key: string]: ResponseInfo; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ResponsesCreate {
        this['name'] = name;
        return this;
    }
    public withResponses(responses: { [key: string]: ResponseInfo; }): ResponsesCreate {
        this['responses'] = responses;
        return this;
    }
}