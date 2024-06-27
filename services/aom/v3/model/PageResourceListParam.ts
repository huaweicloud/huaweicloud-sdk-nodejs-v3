import { WaterfallPageListParam } from './WaterfallPageListParam';


export class PageResourceListParam {
    public marker?: string;
    public limit?: number;
    public keywords?: { [key: string]: string; };
    private 'ci_relationships'?: boolean;
    private 'ci_type'?: string;
    private 'ci_region'?: string;
    private 'ci_ids'?: Array<string>;
    private 'ci_id'?: string;
    public constructor(ciType?: string) { 
        this['ci_type'] = ciType;
    }
    public withMarker(marker: string): PageResourceListParam {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): PageResourceListParam {
        this['limit'] = limit;
        return this;
    }
    public withKeywords(keywords: { [key: string]: string; }): PageResourceListParam {
        this['keywords'] = keywords;
        return this;
    }
    public withCiRelationships(ciRelationships: boolean): PageResourceListParam {
        this['ci_relationships'] = ciRelationships;
        return this;
    }
    public set ciRelationships(ciRelationships: boolean  | undefined) {
        this['ci_relationships'] = ciRelationships;
    }
    public get ciRelationships(): boolean | undefined {
        return this['ci_relationships'];
    }
    public withCiType(ciType: string): PageResourceListParam {
        this['ci_type'] = ciType;
        return this;
    }
    public set ciType(ciType: string  | undefined) {
        this['ci_type'] = ciType;
    }
    public get ciType(): string | undefined {
        return this['ci_type'];
    }
    public withCiRegion(ciRegion: string): PageResourceListParam {
        this['ci_region'] = ciRegion;
        return this;
    }
    public set ciRegion(ciRegion: string  | undefined) {
        this['ci_region'] = ciRegion;
    }
    public get ciRegion(): string | undefined {
        return this['ci_region'];
    }
    public withCiIds(ciIds: Array<string>): PageResourceListParam {
        this['ci_ids'] = ciIds;
        return this;
    }
    public set ciIds(ciIds: Array<string>  | undefined) {
        this['ci_ids'] = ciIds;
    }
    public get ciIds(): Array<string> | undefined {
        return this['ci_ids'];
    }
    public withCiId(ciId: string): PageResourceListParam {
        this['ci_id'] = ciId;
        return this;
    }
    public set ciId(ciId: string  | undefined) {
        this['ci_id'] = ciId;
    }
    public get ciId(): string | undefined {
        return this['ci_id'];
    }
}