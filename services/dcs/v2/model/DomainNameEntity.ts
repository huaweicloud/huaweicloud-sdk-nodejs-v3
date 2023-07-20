

export class DomainNameEntity {
    private 'domain_name'?: string;
    private 'is_readonly'?: boolean;
    public constructor() { 
    }
    public withDomainName(domainName: string): DomainNameEntity {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIsReadonly(isReadonly: boolean): DomainNameEntity {
        this['is_readonly'] = isReadonly;
        return this;
    }
    public set isReadonly(isReadonly: boolean  | undefined) {
        this['is_readonly'] = isReadonly;
    }
    public get isReadonly(): boolean | undefined {
        return this['is_readonly'];
    }
}