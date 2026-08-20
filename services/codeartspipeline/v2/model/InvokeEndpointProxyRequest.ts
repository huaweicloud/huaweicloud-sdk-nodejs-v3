import { EndpointProxyParam } from './EndpointProxyParam';


export class InvokeEndpointProxyRequest {
    public body?: EndpointProxyParam;
    public constructor() { 
    }
    public withBody(body: EndpointProxyParam): InvokeEndpointProxyRequest {
        this['body'] = body;
        return this;
    }
}