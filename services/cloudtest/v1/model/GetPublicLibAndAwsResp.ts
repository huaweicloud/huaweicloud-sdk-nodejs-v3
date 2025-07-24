

export class GetPublicLibAndAwsResp {
    private 'aw_tag'?: string;
    private 'document_link'?: string;
    private 'is_favorite'?: number;
    private 'public_aw_description'?: string;
    private 'public_aw_id'?: string;
    private 'public_aw_lib_id'?: string;
    private 'public_aw_lib_name'?: string;
    private 'public_aw_mark'?: number;
    private 'public_aw_name'?: string;
    public constructor() { 
    }
    public withAwTag(awTag: string): GetPublicLibAndAwsResp {
        this['aw_tag'] = awTag;
        return this;
    }
    public set awTag(awTag: string  | undefined) {
        this['aw_tag'] = awTag;
    }
    public get awTag(): string | undefined {
        return this['aw_tag'];
    }
    public withDocumentLink(documentLink: string): GetPublicLibAndAwsResp {
        this['document_link'] = documentLink;
        return this;
    }
    public set documentLink(documentLink: string  | undefined) {
        this['document_link'] = documentLink;
    }
    public get documentLink(): string | undefined {
        return this['document_link'];
    }
    public withIsFavorite(isFavorite: number): GetPublicLibAndAwsResp {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: number  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): number | undefined {
        return this['is_favorite'];
    }
    public withPublicAwDescription(publicAwDescription: string): GetPublicLibAndAwsResp {
        this['public_aw_description'] = publicAwDescription;
        return this;
    }
    public set publicAwDescription(publicAwDescription: string  | undefined) {
        this['public_aw_description'] = publicAwDescription;
    }
    public get publicAwDescription(): string | undefined {
        return this['public_aw_description'];
    }
    public withPublicAwId(publicAwId: string): GetPublicLibAndAwsResp {
        this['public_aw_id'] = publicAwId;
        return this;
    }
    public set publicAwId(publicAwId: string  | undefined) {
        this['public_aw_id'] = publicAwId;
    }
    public get publicAwId(): string | undefined {
        return this['public_aw_id'];
    }
    public withPublicAwLibId(publicAwLibId: string): GetPublicLibAndAwsResp {
        this['public_aw_lib_id'] = publicAwLibId;
        return this;
    }
    public set publicAwLibId(publicAwLibId: string  | undefined) {
        this['public_aw_lib_id'] = publicAwLibId;
    }
    public get publicAwLibId(): string | undefined {
        return this['public_aw_lib_id'];
    }
    public withPublicAwLibName(publicAwLibName: string): GetPublicLibAndAwsResp {
        this['public_aw_lib_name'] = publicAwLibName;
        return this;
    }
    public set publicAwLibName(publicAwLibName: string  | undefined) {
        this['public_aw_lib_name'] = publicAwLibName;
    }
    public get publicAwLibName(): string | undefined {
        return this['public_aw_lib_name'];
    }
    public withPublicAwMark(publicAwMark: number): GetPublicLibAndAwsResp {
        this['public_aw_mark'] = publicAwMark;
        return this;
    }
    public set publicAwMark(publicAwMark: number  | undefined) {
        this['public_aw_mark'] = publicAwMark;
    }
    public get publicAwMark(): number | undefined {
        return this['public_aw_mark'];
    }
    public withPublicAwName(publicAwName: string): GetPublicLibAndAwsResp {
        this['public_aw_name'] = publicAwName;
        return this;
    }
    public set publicAwName(publicAwName: string  | undefined) {
        this['public_aw_name'] = publicAwName;
    }
    public get publicAwName(): string | undefined {
        return this['public_aw_name'];
    }
}