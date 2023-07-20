import { UpdatePortRequestBody } from './UpdatePortRequestBody';


export class UpdatePortRequest {
    private 'port_id'?: string;
    public body?: UpdatePortRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): UpdatePortRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: UpdatePortRequestBody): UpdatePortRequest {
        this['body'] = body;
        return this;
    }
}