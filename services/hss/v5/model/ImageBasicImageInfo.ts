

export class ImageBasicImageInfo {
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'layer_digest'?: string;
    public constructor() { 
    }
    public withOsName(osName: string): ImageBasicImageInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): ImageBasicImageInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withLayerDigest(layerDigest: string): ImageBasicImageInfo {
        this['layer_digest'] = layerDigest;
        return this;
    }
    public set layerDigest(layerDigest: string  | undefined) {
        this['layer_digest'] = layerDigest;
    }
    public get layerDigest(): string | undefined {
        return this['layer_digest'];
    }
}