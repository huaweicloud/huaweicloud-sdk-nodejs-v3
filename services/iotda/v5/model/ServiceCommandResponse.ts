import { ServiceCommandPara } from './ServiceCommandPara';


export class ServiceCommandResponse {
    private 'response_name'?: string;
    public paras?: Array<ServiceCommandPara>;
    public constructor(responseName?: string) { 
        this['response_name'] = responseName;
    }
    public withResponseName(responseName: string): ServiceCommandResponse {
        this['response_name'] = responseName;
        return this;
    }
    public set responseName(responseName: string  | undefined) {
        this['response_name'] = responseName;
    }
    public get responseName(): string | undefined {
        return this['response_name'];
    }
    public withParas(paras: Array<ServiceCommandPara>): ServiceCommandResponse {
        this['paras'] = paras;
        return this;
    }
}