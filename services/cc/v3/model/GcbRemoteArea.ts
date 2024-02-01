

export class GcbRemoteArea {
    private 'remote_area'?: string;
    public constructor() { 
    }
    public withRemoteArea(remoteArea: string): GcbRemoteArea {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
}