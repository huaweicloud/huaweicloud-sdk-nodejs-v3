

export class ShowDirectConnectLocationRequest {
    private 'direct_connect_location_id'?: string;
    public constructor(directConnectLocationId?: string) { 
        this['direct_connect_location_id'] = directConnectLocationId;
    }
    public withDirectConnectLocationId(directConnectLocationId: string): ShowDirectConnectLocationRequest {
        this['direct_connect_location_id'] = directConnectLocationId;
        return this;
    }
    public set directConnectLocationId(directConnectLocationId: string  | undefined) {
        this['direct_connect_location_id'] = directConnectLocationId;
    }
    public get directConnectLocationId(): string | undefined {
        return this['direct_connect_location_id'];
    }
}