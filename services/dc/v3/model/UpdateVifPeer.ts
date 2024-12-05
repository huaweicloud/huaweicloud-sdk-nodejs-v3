

export class UpdateVifPeer {
    public name?: string;
    public description?: string;
    private 'remote_ep_group'?: Array<string>;
    public constructor(name?: string, remoteEpGroup?: Array<string>) { 
        this['name'] = name;
        this['remote_ep_group'] = remoteEpGroup;
    }
    public withName(name: string): UpdateVifPeer {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVifPeer {
        this['description'] = description;
        return this;
    }
    public withRemoteEpGroup(remoteEpGroup: Array<string>): UpdateVifPeer {
        this['remote_ep_group'] = remoteEpGroup;
        return this;
    }
    public set remoteEpGroup(remoteEpGroup: Array<string>  | undefined) {
        this['remote_ep_group'] = remoteEpGroup;
    }
    public get remoteEpGroup(): Array<string> | undefined {
        return this['remote_ep_group'];
    }
}