import { CreateNoticeRuleItem } from './CreateNoticeRuleItem';


export class CreateNoticeRuleReq {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: CreateNoticeRuleItem;
    public constructor(apiVersion?: string, kind?: string, spec?: CreateNoticeRuleItem) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): CreateNoticeRuleReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): CreateNoticeRuleReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: CreateNoticeRuleItem): CreateNoticeRuleReq {
        this['spec'] = spec;
        return this;
    }
}