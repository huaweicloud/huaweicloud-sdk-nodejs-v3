

export class ListServiceSetRequest {
    private 'project_id': string | undefined;
    private 'object_id': string | undefined;
    private 'key_word'?: string | undefined;
    public limit: number;
    public offset: number;
    public constructor(projectId?: any, objectId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListServiceSetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListServiceSetRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListServiceSetRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord() {
        return this['key_word'];
    }
    public withLimit(limit: number): ListServiceSetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServiceSetRequest {
        this['offset'] = offset;
        return this;
    }
}