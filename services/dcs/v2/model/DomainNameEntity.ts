

export class DomainNameEntity {
    private 'domain_name'?: string | undefined;
    private 'is_readonly'?: boolean | undefined;
    public constructor() { 
    }
    public withDomainName(domainName: string): DomainNameEntity {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withIsReadonly(isReadonly: boolean): DomainNameEntity {
        this['is_readonly'] = isReadonly;
        return this;
    }
    public set isReadonly(isReadonly: boolean | undefined) {
        this['is_readonly'] = isReadonly;
    }
    public get isReadonly() {
        return this['is_readonly'];
    }
}