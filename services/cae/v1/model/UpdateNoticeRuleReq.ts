import { UpdateNoticeRuleItem } from './UpdateNoticeRuleItem';


export class UpdateNoticeRuleReq {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: UpdateNoticeRuleItem;
    public constructor(apiVersion?: string, kind?: string, spec?: UpdateNoticeRuleItem) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): UpdateNoticeRuleReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): UpdateNoticeRuleReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: UpdateNoticeRuleItem): UpdateNoticeRuleReq {
        this['spec'] = spec;
        return this;
    }
}