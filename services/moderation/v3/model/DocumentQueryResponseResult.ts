import { DocumentQueryResponseResultDetails } from './DocumentQueryResponseResultDetails';


export class DocumentQueryResponseResult {
    public suggestion?: string;
    public details?: Array<DocumentQueryResponseResultDetails>;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): DocumentQueryResponseResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetails(details: Array<DocumentQueryResponseResultDetails>): DocumentQueryResponseResult {
        this['details'] = details;
        return this;
    }
}