

export class SignApiBinding {
    private 'sign_id'?: string;
    private 'publish_ids'?: Array<string>;
    public constructor(signId?: string, publishIds?: Array<string>) { 
        this['sign_id'] = signId;
        this['publish_ids'] = publishIds;
    }
    public withSignId(signId: string): SignApiBinding {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
    public withPublishIds(publishIds: Array<string>): SignApiBinding {
        this['publish_ids'] = publishIds;
        return this;
    }
    public set publishIds(publishIds: Array<string>  | undefined) {
        this['publish_ids'] = publishIds;
    }
    public get publishIds(): Array<string> | undefined {
        return this['publish_ids'];
    }
}