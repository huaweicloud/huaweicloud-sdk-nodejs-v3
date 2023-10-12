

export class ShowDirectConnectRequest {
    private 'direct_connect_id'?: string;
    public fields?: Array<string>;
    public constructor(directConnectId?: string) { 
        this['direct_connect_id'] = directConnectId;
    }
    public withDirectConnectId(directConnectId: string): ShowDirectConnectRequest {
        this['direct_connect_id'] = directConnectId;
        return this;
    }
    public set directConnectId(directConnectId: string  | undefined) {
        this['direct_connect_id'] = directConnectId;
    }
    public get directConnectId(): string | undefined {
        return this['direct_connect_id'];
    }
    public withFields(fields: Array<string>): ShowDirectConnectRequest {
        this['fields'] = fields;
        return this;
    }
}