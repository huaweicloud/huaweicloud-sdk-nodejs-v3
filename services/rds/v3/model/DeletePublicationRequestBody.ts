

export class DeletePublicationRequestBody {
    private 'publication_ids'?: Array<string>;
    public constructor(publicationIds?: Array<string>) { 
        this['publication_ids'] = publicationIds;
    }
    public withPublicationIds(publicationIds: Array<string>): DeletePublicationRequestBody {
        this['publication_ids'] = publicationIds;
        return this;
    }
    public set publicationIds(publicationIds: Array<string>  | undefined) {
        this['publication_ids'] = publicationIds;
    }
    public get publicationIds(): Array<string> | undefined {
        return this['publication_ids'];
    }
}