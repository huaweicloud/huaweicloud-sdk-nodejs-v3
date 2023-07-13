

export class ServerBlockDevice {
    public bootIndex?: number;
    public pciAddress?: string;
    public volumeId?: string;
    public device?: string;
    public serverId?: string;
    public id?: string;
    public size?: number;
    public bus?: string;
    public constructor() { 
    }
    public withBootIndex(bootIndex: number): ServerBlockDevice {
        this['bootIndex'] = bootIndex;
        return this;
    }
    public withPciAddress(pciAddress: string): ServerBlockDevice {
        this['pciAddress'] = pciAddress;
        return this;
    }
    public withVolumeId(volumeId: string): ServerBlockDevice {
        this['volumeId'] = volumeId;
        return this;
    }
    public withDevice(device: string): ServerBlockDevice {
        this['device'] = device;
        return this;
    }
    public withServerId(serverId: string): ServerBlockDevice {
        this['serverId'] = serverId;
        return this;
    }
    public withId(id: string): ServerBlockDevice {
        this['id'] = id;
        return this;
    }
    public withSize(size: number): ServerBlockDevice {
        this['size'] = size;
        return this;
    }
    public withBus(bus: string): ServerBlockDevice {
        this['bus'] = bus;
        return this;
    }
}