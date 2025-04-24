import { InvocationHttpParameters } from './InvocationHttpParameters';


export class ApigwTargetDetail {
    public url?: string;
    private 'invocation_http_parameters'?: InvocationHttpParameters;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): ApigwTargetDetail {
        this['url'] = url;
        return this;
    }
    public withInvocationHttpParameters(invocationHttpParameters: InvocationHttpParameters): ApigwTargetDetail {
        this['invocation_http_parameters'] = invocationHttpParameters;
        return this;
    }
    public set invocationHttpParameters(invocationHttpParameters: InvocationHttpParameters  | undefined) {
        this['invocation_http_parameters'] = invocationHttpParameters;
    }
    public get invocationHttpParameters(): InvocationHttpParameters | undefined {
        return this['invocation_http_parameters'];
    }
}