

export class ShowPortRequest {
    private 'port_id': string | undefined;
    public constructor(portId?: any) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): ShowPortRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
}