

export class DetachDevServerPortRequest {
    public id?: string;
    private 'port_id'?: string;
    public constructor(id?: string, portId?: string) { 
        this['id'] = id;
        this['port_id'] = portId;
    }
    public withId(id: string): DetachDevServerPortRequest {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): DetachDevServerPortRequest {
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