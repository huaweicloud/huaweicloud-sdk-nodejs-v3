import { SupportLinkInfo } from './SupportLinkInfo';


export class SupportLinksResp {
    private 'total_count'?: number;
    private 'support_links'?: Array<SupportLinkInfo>;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): SupportLinksResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSupportLinks(supportLinks: Array<SupportLinkInfo>): SupportLinksResp {
        this['support_links'] = supportLinks;
        return this;
    }
    public set supportLinks(supportLinks: Array<SupportLinkInfo>  | undefined) {
        this['support_links'] = supportLinks;
    }
    public get supportLinks(): Array<SupportLinkInfo> | undefined {
        return this['support_links'];
    }
}