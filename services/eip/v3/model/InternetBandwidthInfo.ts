

export class InternetBandwidthInfo {
    public id?: string;
    public size?: number;
    public constructor() { 
    }
    public withId(id: string): InternetBandwidthInfo {
        this['id'] = id;
        return this;
    }
    public withSize(size: number): InternetBandwidthInfo {
        this['size'] = size;
        return this;
    }
}