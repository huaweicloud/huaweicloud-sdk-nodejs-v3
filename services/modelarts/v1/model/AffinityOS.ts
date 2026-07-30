

export class AffinityOS {
    public name?: string;
    public imageId?: string;
    public preferred?: boolean;
    public eos?: boolean;
    public offline?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AffinityOS {
        this['name'] = name;
        return this;
    }
    public withImageId(imageId: string): AffinityOS {
        this['imageId'] = imageId;
        return this;
    }
    public withPreferred(preferred: boolean): AffinityOS {
        this['preferred'] = preferred;
        return this;
    }
    public withEos(eos: boolean): AffinityOS {
        this['eos'] = eos;
        return this;
    }
    public withOffline(offline: boolean): AffinityOS {
        this['offline'] = offline;
        return this;
    }
}