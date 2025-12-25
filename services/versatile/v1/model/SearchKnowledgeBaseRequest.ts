import { KnowledgeBaseRetrievalReq } from './KnowledgeBaseRetrievalReq';


export class SearchKnowledgeBaseRequest {
    public body?: KnowledgeBaseRetrievalReq;
    public constructor() { 
    }
    public withBody(body: KnowledgeBaseRetrievalReq): SearchKnowledgeBaseRequest {
        this['body'] = body;
        return this;
    }
}