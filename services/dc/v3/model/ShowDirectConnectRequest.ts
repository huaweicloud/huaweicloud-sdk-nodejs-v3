

export class ShowDirectConnectRequest {
    private 'direct_connect_id'?: string;
    public limit?: number;
    public marker?: string;
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
    public withLimit(limit: number): ShowDirectConnectRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowDirectConnectRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ShowDirectConnectRequest {
        this['fields'] = fields;
        return this;
    }
}