

export class CentralNetworkDefaultPlaneId {
    private 'default_plane_id'?: string;
    public constructor(defaultPlaneId?: string) { 
        this['default_plane_id'] = defaultPlaneId;
    }
    public withDefaultPlaneId(defaultPlaneId: string): CentralNetworkDefaultPlaneId {
        this['default_plane_id'] = defaultPlaneId;
        return this;
    }
    public set defaultPlaneId(defaultPlaneId: string  | undefined) {
        this['default_plane_id'] = defaultPlaneId;
    }
    public get defaultPlaneId(): string | undefined {
        return this['default_plane_id'];
    }
}