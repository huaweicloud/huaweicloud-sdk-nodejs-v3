import { ApiTestParas } from './ApiTestParas';


export class ApiTestDTO {
    public body?: string;
    public paras?: ApiTestParas;
    public constructor() { 
    }
    public withBody(body: string): ApiTestDTO {
        this['body'] = body;
        return this;
    }
    public withParas(paras: ApiTestParas): ApiTestDTO {
        this['paras'] = paras;
        return this;
    }
}