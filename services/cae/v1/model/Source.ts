import { Repo } from './Repo';


export class Source {
    public code?: Repo;
    public type?: SourceTypeEnum | string;
    private 'sub_type'?: SourceSubTypeEnum | string;
    public url?: string;
    public constructor(type?: string, url?: string) { 
        this['type'] = type;
        this['url'] = url;
    }
    public withCode(code: Repo): Source {
        this['code'] = code;
        return this;
    }
    public withType(type: SourceTypeEnum | string): Source {
        this['type'] = type;
        return this;
    }
    public withSubType(subType: SourceSubTypeEnum | string): Source {
        this['sub_type'] = subType;
        return this;
    }
    public set subType(subType: SourceSubTypeEnum | string  | undefined) {
        this['sub_type'] = subType;
    }
    public get subType(): SourceSubTypeEnum | string | undefined {
        return this['sub_type'];
    }
    public withUrl(url: string): Source {
        this['url'] = url;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceTypeEnum {
    IMAGE = 'image',
    CODE = 'code',
    SOFTWAREPACKAGE = 'softwarePackage'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceSubTypeEnum {
    BINOBS = 'BinObs',
    BINDEVCLOUD = 'BinDevCloud',
    GITLAB = 'GitLab',
    GITHUB = 'GitHub',
    DEVCLOUD = 'DevCloud',
    GITEE = 'Gitee',
    BITBUCKET = 'Bitbucket'
}
