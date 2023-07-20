import { NeutronUpdatePortRequestBody } from './NeutronUpdatePortRequestBody';


export class NeutronUpdatePortRequest {
    private 'port_id'?: string;
    public body?: NeutronUpdatePortRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): NeutronUpdatePortRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: NeutronUpdatePortRequestBody): NeutronUpdatePortRequest {
        this['body'] = body;
        return this;
    }
}