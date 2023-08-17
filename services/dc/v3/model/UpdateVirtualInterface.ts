

export class UpdateVirtualInterface {
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    private 'remote_ep_group'?: Array<string>;
    private 'service_ep_group'?: Array<string>;
    private 'enable_bfd'?: boolean;
    private 'enable_nqa'?: boolean;
    public status?: UpdateVirtualInterfaceStatusEnum | string;
    public constructor() { 
    }
    public withName(name: string): UpdateVirtualInterface {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVirtualInterface {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: number): UpdateVirtualInterface {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withRemoteEpGroup(remoteEpGroup: Array<string>): UpdateVirtualInterface {
        this['remote_ep_group'] = remoteEpGroup;
        return this;
    }
    public set remoteEpGroup(remoteEpGroup: Array<string>  | undefined) {
        this['remote_ep_group'] = remoteEpGroup;
    }
    public get remoteEpGroup(): Array<string> | undefined {
        return this['remote_ep_group'];
    }
    public withServiceEpGroup(serviceEpGroup: Array<string>): UpdateVirtualInterface {
        this['service_ep_group'] = serviceEpGroup;
        return this;
    }
    public set serviceEpGroup(serviceEpGroup: Array<string>  | undefined) {
        this['service_ep_group'] = serviceEpGroup;
    }
    public get serviceEpGroup(): Array<string> | undefined {
        return this['service_ep_group'];
    }
    public withEnableBfd(enableBfd: boolean): UpdateVirtualInterface {
        this['enable_bfd'] = enableBfd;
        return this;
    }
    public set enableBfd(enableBfd: boolean  | undefined) {
        this['enable_bfd'] = enableBfd;
    }
    public get enableBfd(): boolean | undefined {
        return this['enable_bfd'];
    }
    public withEnableNqa(enableNqa: boolean): UpdateVirtualInterface {
        this['enable_nqa'] = enableNqa;
        return this;
    }
    public set enableNqa(enableNqa: boolean  | undefined) {
        this['enable_nqa'] = enableNqa;
    }
    public get enableNqa(): boolean | undefined {
        return this['enable_nqa'];
    }
    public withStatus(status: UpdateVirtualInterfaceStatusEnum | string): UpdateVirtualInterface {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateVirtualInterfaceStatusEnum {
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}
