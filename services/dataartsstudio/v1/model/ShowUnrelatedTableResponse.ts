import { AtlasEntityHeader } from './AtlasEntityHeader';
import { AtlasFullTextResult } from './AtlasFullTextResult';
import { AttributeSearchResult } from './AttributeSearchResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUnrelatedTableResponse extends SdkResponse {
    public attributes?: AttributeSearchResult;
    public classification?: string;
    public count?: number;
    public entities?: Array<AtlasEntityHeader>;
    private 'full_text_result'?: Array<AtlasFullTextResult>;
    private 'query_text'?: string;
    private 'query_type'?: string;
    private 'referred_entities'?: object;
    private 'scroll_id'?: string;
    private 'search_parameters'?: object;
    public type?: string;
    public constructor() { 
        super();
    }
    public withAttributes(attributes: AttributeSearchResult): ShowUnrelatedTableResponse {
        this['attributes'] = attributes;
        return this;
    }
    public withClassification(classification: string): ShowUnrelatedTableResponse {
        this['classification'] = classification;
        return this;
    }
    public withCount(count: number): ShowUnrelatedTableResponse {
        this['count'] = count;
        return this;
    }
    public withEntities(entities: Array<AtlasEntityHeader>): ShowUnrelatedTableResponse {
        this['entities'] = entities;
        return this;
    }
    public withFullTextResult(fullTextResult: Array<AtlasFullTextResult>): ShowUnrelatedTableResponse {
        this['full_text_result'] = fullTextResult;
        return this;
    }
    public set fullTextResult(fullTextResult: Array<AtlasFullTextResult>  | undefined) {
        this['full_text_result'] = fullTextResult;
    }
    public get fullTextResult(): Array<AtlasFullTextResult> | undefined {
        return this['full_text_result'];
    }
    public withQueryText(queryText: string): ShowUnrelatedTableResponse {
        this['query_text'] = queryText;
        return this;
    }
    public set queryText(queryText: string  | undefined) {
        this['query_text'] = queryText;
    }
    public get queryText(): string | undefined {
        return this['query_text'];
    }
    public withQueryType(queryType: string): ShowUnrelatedTableResponse {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withReferredEntities(referredEntities: object): ShowUnrelatedTableResponse {
        this['referred_entities'] = referredEntities;
        return this;
    }
    public set referredEntities(referredEntities: object  | undefined) {
        this['referred_entities'] = referredEntities;
    }
    public get referredEntities(): object | undefined {
        return this['referred_entities'];
    }
    public withScrollId(scrollId: string): ShowUnrelatedTableResponse {
        this['scroll_id'] = scrollId;
        return this;
    }
    public set scrollId(scrollId: string  | undefined) {
        this['scroll_id'] = scrollId;
    }
    public get scrollId(): string | undefined {
        return this['scroll_id'];
    }
    public withSearchParameters(searchParameters: object): ShowUnrelatedTableResponse {
        this['search_parameters'] = searchParameters;
        return this;
    }
    public set searchParameters(searchParameters: object  | undefined) {
        this['search_parameters'] = searchParameters;
    }
    public get searchParameters(): object | undefined {
        return this['search_parameters'];
    }
    public withType(type: string): ShowUnrelatedTableResponse {
        this['type'] = type;
        return this;
    }
}