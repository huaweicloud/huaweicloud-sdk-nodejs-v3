

export class LeakageListInfo {
    public id?: string;
    public policyid?: string;
    public url?: string;
    public category?: string;
    public contents?: Array<string>;
    public timestamp?: number;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): LeakageListInfo {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): LeakageListInfo {
        this['policyid'] = policyid;
        return this;
    }
    public withUrl(url: string): LeakageListInfo {
        this['url'] = url;
        return this;
    }
    public withCategory(category: string): LeakageListInfo {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): LeakageListInfo {
        this['contents'] = contents;
        return this;
    }
    public withTimestamp(timestamp: number): LeakageListInfo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): LeakageListInfo {
        this['status'] = status;
        return this;
    }
}