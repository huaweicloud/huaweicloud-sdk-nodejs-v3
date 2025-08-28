

export class RecallKnowledgeLibraryInfo {
    private 'document_id'?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    private 'question_answer_id'?: string;
    public content?: string;
    public score?: number;
    public constructor() { 
    }
    public withDocumentId(documentId: string): RecallKnowledgeLibraryInfo {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withFileName(fileName: string): RecallKnowledgeLibraryInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): RecallKnowledgeLibraryInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withQuestionAnswerId(questionAnswerId: string): RecallKnowledgeLibraryInfo {
        this['question_answer_id'] = questionAnswerId;
        return this;
    }
    public set questionAnswerId(questionAnswerId: string  | undefined) {
        this['question_answer_id'] = questionAnswerId;
    }
    public get questionAnswerId(): string | undefined {
        return this['question_answer_id'];
    }
    public withContent(content: string): RecallKnowledgeLibraryInfo {
        this['content'] = content;
        return this;
    }
    public withScore(score: number): RecallKnowledgeLibraryInfo {
        this['score'] = score;
        return this;
    }
}