

export class LogObject {
    private 'domain_name'?: string | undefined;
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    public name?: string;
    public size?: number;
    public link?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): LogObject {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withStartTime(startTime: number): LogObject {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): LogObject {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withName(name: string): LogObject {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): LogObject {
        this['size'] = size;
        return this;
    }
    public withLink(link: string): LogObject {
        this['link'] = link;
        return this;
    }
}