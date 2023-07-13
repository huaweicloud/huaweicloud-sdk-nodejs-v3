

export class CdnLog {
    private 'domain_name'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public name?: string;
    public size?: number;
    public link?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): CdnLog {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withStartTime(startTime: string): CdnLog {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): CdnLog {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withName(name: string): CdnLog {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): CdnLog {
        this['size'] = size;
        return this;
    }
    public withLink(link: string): CdnLog {
        this['link'] = link;
        return this;
    }
}