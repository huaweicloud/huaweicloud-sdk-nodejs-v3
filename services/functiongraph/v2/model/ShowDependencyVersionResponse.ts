
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDependencyVersionResponse extends SdkResponse {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: ShowDependencyVersionResponseRuntimeEnum | string;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string;
    public version?: number;
    private 'last_modified'?: number;
    private 'dep_id'?: string;
    private 'download_link'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDependencyVersionResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): ShowDependencyVersionResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): ShowDependencyVersionResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: ShowDependencyVersionResponseRuntimeEnum | string): ShowDependencyVersionResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): ShowDependencyVersionResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): ShowDependencyVersionResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ShowDependencyVersionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDependencyVersionResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): ShowDependencyVersionResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withVersion(version: number): ShowDependencyVersionResponse {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): ShowDependencyVersionResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: number  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): number | undefined {
        return this['last_modified'];
    }
    public withDepId(depId: string): ShowDependencyVersionResponse {
        this['dep_id'] = depId;
        return this;
    }
    public set depId(depId: string  | undefined) {
        this['dep_id'] = depId;
    }
    public get depId(): string | undefined {
        return this['dep_id'];
    }
    public withDownloadLink(downloadLink: string): ShowDependencyVersionResponse {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDependencyVersionResponseRuntimeEnum {
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    CUSTOM = 'Custom',
    PHP7_3 = 'PHP7.3',
    PYTHON3_9 = 'Python3.9',
    HTTP = 'http',
    CUSTOM_IMAGE = 'Custom Image'
}
