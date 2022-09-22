

export class PrivacyResponseBody {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public status?: number;
    public url?: string;
    public category?: PrivacyResponseBodyCategoryEnum;
    public index?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): PrivacyResponseBody {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): PrivacyResponseBody {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): PrivacyResponseBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withStatus(status: number): PrivacyResponseBody {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): PrivacyResponseBody {
        this['url'] = url;
        return this;
    }
    public withCategory(category: PrivacyResponseBodyCategoryEnum): PrivacyResponseBody {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): PrivacyResponseBody {
        this['index'] = index;
        return this;
    }
    public withDescription(description: string): PrivacyResponseBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivacyResponseBodyCategoryEnum {
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    FORM = 'form'
}
