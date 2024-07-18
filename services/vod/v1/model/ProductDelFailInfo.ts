

export class ProductDelFailInfo {
    public url?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withUrl(url: string): ProductDelFailInfo {
        this['url'] = url;
        return this;
    }
    public withFailReason(failReason: string): ProductDelFailInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}