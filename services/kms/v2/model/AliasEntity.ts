

export class AliasEntity {
    private 'domain_id'?: string;
    private 'key_id'?: string;
    public alias?: string;
    private 'alias_urn'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(alias?: string, aliasUrn?: string) { 
        this['alias'] = alias;
        this['alias_urn'] = aliasUrn;
    }
    public withDomainId(domainId: string): AliasEntity {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withKeyId(keyId: string): AliasEntity {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withAlias(alias: string): AliasEntity {
        this['alias'] = alias;
        return this;
    }
    public withAliasUrn(aliasUrn: string): AliasEntity {
        this['alias_urn'] = aliasUrn;
        return this;
    }
    public set aliasUrn(aliasUrn: string  | undefined) {
        this['alias_urn'] = aliasUrn;
    }
    public get aliasUrn(): string | undefined {
        return this['alias_urn'];
    }
    public withCreateTime(createTime: string): AliasEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): AliasEntity {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}