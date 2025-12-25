

export class RetrievalResultInfo {
    private 'file_id'?: string;
    public title?: string;
    private 'chunk_id'?: string;
    public content?: string;
    public similarity?: number;
    private 'knowledge_base_id'?: string;
    private 'image_ids'?: Array<string>;
    public constructor() { 
    }
    public withFileId(fileId: string): RetrievalResultInfo {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withTitle(title: string): RetrievalResultInfo {
        this['title'] = title;
        return this;
    }
    public withChunkId(chunkId: string): RetrievalResultInfo {
        this['chunk_id'] = chunkId;
        return this;
    }
    public set chunkId(chunkId: string  | undefined) {
        this['chunk_id'] = chunkId;
    }
    public get chunkId(): string | undefined {
        return this['chunk_id'];
    }
    public withContent(content: string): RetrievalResultInfo {
        this['content'] = content;
        return this;
    }
    public withSimilarity(similarity: number): RetrievalResultInfo {
        this['similarity'] = similarity;
        return this;
    }
    public withKnowledgeBaseId(knowledgeBaseId: string): RetrievalResultInfo {
        this['knowledge_base_id'] = knowledgeBaseId;
        return this;
    }
    public set knowledgeBaseId(knowledgeBaseId: string  | undefined) {
        this['knowledge_base_id'] = knowledgeBaseId;
    }
    public get knowledgeBaseId(): string | undefined {
        return this['knowledge_base_id'];
    }
    public withImageIds(imageIds: Array<string>): RetrievalResultInfo {
        this['image_ids'] = imageIds;
        return this;
    }
    public set imageIds(imageIds: Array<string>  | undefined) {
        this['image_ids'] = imageIds;
    }
    public get imageIds(): Array<string> | undefined {
        return this['image_ids'];
    }
}