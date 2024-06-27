import { CreatePortTagRequestBody } from './CreatePortTagRequestBody';


export class CreatePortTagRequest {
    private 'port_id'?: string;
    public body?: CreatePortTagRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): CreatePortTagRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: CreatePortTagRequestBody): CreatePortTagRequest {
        this['body'] = body;
        return this;
    }
}