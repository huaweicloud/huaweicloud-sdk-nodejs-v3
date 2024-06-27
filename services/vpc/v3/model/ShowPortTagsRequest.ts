

export class ShowPortTagsRequest {
    private 'port_id'?: string;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): ShowPortTagsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
}