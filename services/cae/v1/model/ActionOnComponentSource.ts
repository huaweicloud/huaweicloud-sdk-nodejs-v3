import { Repo } from './Repo';


export class ActionOnComponentSource {
    public code?: Repo;
    public type?: ActionOnComponentSourceTypeEnum | string;
    private 'sub_type'?: ActionOnComponentSourceSubTypeEnum | string;
    public url?: string;
    public constructor() { 
    }
    public withCode(code: Repo): ActionOnComponentSource {
        this['code'] = code;
        return this;
    }
    public withType(type: ActionOnComponentSourceTypeEnum | string): ActionOnComponentSource {
        this['type'] = type;
        return this;
    }
    public withSubType(subType: ActionOnComponentSourceSubTypeEnum | string): ActionOnComponentSource {
        this['sub_type'] = subType;
        return this;
    }
    public set subType(subType: ActionOnComponentSourceSubTypeEnum | string  | undefined) {
        this['sub_type'] = subType;
    }
    public get subType(): ActionOnComponentSourceSubTypeEnum | string | undefined {
        return this['sub_type'];
    }
    public withUrl(url: string): ActionOnComponentSource {
        this['url'] = url;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionOnComponentSourceTypeEnum {
    IMAGE = 'image',
    CODE = 'code',
    SOFTWAREPACKAGE = 'softwarePackage'
}
/**
    * @export
    * @enum {string}
    */
export enum ActionOnComponentSourceSubTypeEnum {
    BINOBS = 'BinObs',
    BINDEVCLOUD = 'BinDevCloud',
    GITLAB = 'GitLab',
    GITHUB = 'GitHub',
    DEVCLOUD = 'DevCloud',
    GITEE = 'Gitee',
    BITBUCKET = 'Bitbucket'
}
