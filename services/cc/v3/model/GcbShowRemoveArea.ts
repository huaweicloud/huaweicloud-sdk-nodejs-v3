

export class GcbShowRemoveArea {
    private 'remote_area'?: string;
    public constructor() { 
    }
    public withRemoteArea(remoteArea: string): GcbShowRemoveArea {
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