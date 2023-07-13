import { NeutronCreateFloatingIpRequestBody } from './NeutronCreateFloatingIpRequestBody';


export class NeutronCreateFloatingIpRequest {
    public body?: NeutronCreateFloatingIpRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreateFloatingIpRequestBody): NeutronCreateFloatingIpRequest {
        this['body'] = body;
        return this;
    }
}