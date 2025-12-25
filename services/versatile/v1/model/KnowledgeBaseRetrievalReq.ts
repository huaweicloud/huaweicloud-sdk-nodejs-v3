

export class KnowledgeBaseRetrievalReq {
    private 'knowledge_base_ids'?: Array<string>;
    public query?: string;
    private 'search_mode'?: KnowledgeBaseRetrievalReqSearchModeEnum | string;
    private 'top_k'?: number;
    private 'similarity_threshold'?: number;
    private 'image_mask_policy'?: KnowledgeBaseRetrievalReqImageMaskPolicyEnum | string;
    public constructor(knowledgeBaseIds?: Array<string>, query?: string) { 
        this['knowledge_base_ids'] = knowledgeBaseIds;
        this['query'] = query;
    }
    public withKnowledgeBaseIds(knowledgeBaseIds: Array<string>): KnowledgeBaseRetrievalReq {
        this['knowledge_base_ids'] = knowledgeBaseIds;
        return this;
    }
    public set knowledgeBaseIds(knowledgeBaseIds: Array<string>  | undefined) {
        this['knowledge_base_ids'] = knowledgeBaseIds;
    }
    public get knowledgeBaseIds(): Array<string> | undefined {
        return this['knowledge_base_ids'];
    }
    public withQuery(query: string): KnowledgeBaseRetrievalReq {
        this['query'] = query;
        return this;
    }
    public withSearchMode(searchMode: KnowledgeBaseRetrievalReqSearchModeEnum | string): KnowledgeBaseRetrievalReq {
        this['search_mode'] = searchMode;
        return this;
    }
    public set searchMode(searchMode: KnowledgeBaseRetrievalReqSearchModeEnum | string  | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode(): KnowledgeBaseRetrievalReqSearchModeEnum | string | undefined {
        return this['search_mode'];
    }
    public withTopK(topK: number): KnowledgeBaseRetrievalReq {
        this['top_k'] = topK;
        return this;
    }
    public set topK(topK: number  | undefined) {
        this['top_k'] = topK;
    }
    public get topK(): number | undefined {
        return this['top_k'];
    }
    public withSimilarityThreshold(similarityThreshold: number): KnowledgeBaseRetrievalReq {
        this['similarity_threshold'] = similarityThreshold;
        return this;
    }
    public set similarityThreshold(similarityThreshold: number  | undefined) {
        this['similarity_threshold'] = similarityThreshold;
    }
    public get similarityThreshold(): number | undefined {
        return this['similarity_threshold'];
    }
    public withImageMaskPolicy(imageMaskPolicy: KnowledgeBaseRetrievalReqImageMaskPolicyEnum | string): KnowledgeBaseRetrievalReq {
        this['image_mask_policy'] = imageMaskPolicy;
        return this;
    }
    public set imageMaskPolicy(imageMaskPolicy: KnowledgeBaseRetrievalReqImageMaskPolicyEnum | string  | undefined) {
        this['image_mask_policy'] = imageMaskPolicy;
    }
    public get imageMaskPolicy(): KnowledgeBaseRetrievalReqImageMaskPolicyEnum | string | undefined {
        return this['image_mask_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KnowledgeBaseRetrievalReqSearchModeEnum {
    DOC = 'doc',
    KEYWORD = 'keyword',
    MIX = 'mix',
    FAQ = 'faq'
}
/**
    * @export
    * @enum {string}
    */
export enum KnowledgeBaseRetrievalReqImageMaskPolicyEnum {
    RETAIN_IMAGE_ID = 'RETAIN_IMAGE_ID',
    RETAIN_PLACEHOLDER = 'RETAIN_PLACEHOLDER',
    REMOVE_IMAGE = 'REMOVE_IMAGE'
}
