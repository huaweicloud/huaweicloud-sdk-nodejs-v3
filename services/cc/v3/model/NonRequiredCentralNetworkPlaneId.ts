

export class NonRequiredCentralNetworkPlaneId {
    private 'central_network_plane_id'?: string;
    public constructor() { 
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): NonRequiredCentralNetworkPlaneId {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
}