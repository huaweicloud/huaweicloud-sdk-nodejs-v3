import { Links } from './Links';


export class ImageInfo {
    public id?: string;
    public name?: string;
    private '__os_type'?: ImageInfoOsTypeEnum | string;
    public links?: Array<Links>;
    public constructor() { 
    }
    public withId(id: string): ImageInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ImageInfo {
        this['name'] = name;
        return this;
    }
    public withOsType(osType: ImageInfoOsTypeEnum | string): ImageInfo {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: ImageInfoOsTypeEnum | string  | undefined) {
        this['__os_type'] = osType;
    }
    public get osType(): ImageInfoOsTypeEnum | string | undefined {
        return this['__os_type'];
    }
    public withLinks(links: Array<Links>): ImageInfo {
        this['links'] = links;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageInfoOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
