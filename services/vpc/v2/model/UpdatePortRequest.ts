import { UpdatePortRequestBody } from './UpdatePortRequestBody';


export class UpdatePortRequest {
    private 'port_id': string | undefined;
    public body?: UpdatePortRequestBody;
    public constructor(portId?: any) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): UpdatePortRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withBody(body: UpdatePortRequestBody): UpdatePortRequest {
        this['body'] = body;
        return this;
    }
}