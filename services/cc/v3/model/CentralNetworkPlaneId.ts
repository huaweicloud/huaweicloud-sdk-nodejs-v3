

export class CentralNetworkPlaneId {
    private 'central_network_plane_id'?: string;
    public constructor(centralNetworkPlaneId?: string) { 
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CentralNetworkPlaneId {
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