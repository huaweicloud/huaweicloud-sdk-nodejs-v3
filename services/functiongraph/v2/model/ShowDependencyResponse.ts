
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDependencyResponse extends SdkResponse {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: ShowDependencyResponseRuntimeEnum;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDependencyResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): ShowDependencyResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): ShowDependencyResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: ShowDependencyResponseRuntimeEnum): ShowDependencyResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): ShowDependencyResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): ShowDependencyResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ShowDependencyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDependencyResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): ShowDependencyResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDependencyResponseRuntimeEnum {
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
    PHP7_3 = 'PHP7.3',
    PYTHON3_9 = 'Python3.9'
}
