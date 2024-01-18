import { CreateVpnConnectionRequestBody } from './CreateVpnConnectionRequestBody';


export class CreateVpnConnectionRequest {
    public body?: CreateVpnConnectionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVpnConnectionRequestBody): CreateVpnConnectionRequest {
        this['body'] = body;
        return this;
    }
}