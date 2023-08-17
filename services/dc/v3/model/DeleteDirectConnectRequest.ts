

export class DeleteDirectConnectRequest {
    private 'direct_connect_id'?: string;
    public constructor(directConnectId?: string) { 
        this['direct_connect_id'] = directConnectId;
    }
    public withDirectConnectId(directConnectId: string): DeleteDirectConnectRequest {
        this['direct_connect_id'] = directConnectId;
        return this;
    }
    public set directConnectId(directConnectId: string  | undefined) {
        this['direct_connect_id'] = directConnectId;
    }
    public get directConnectId(): string | undefined {
        return this['direct_connect_id'];
    }
}