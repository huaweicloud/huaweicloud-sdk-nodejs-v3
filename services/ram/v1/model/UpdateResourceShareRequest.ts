import { UpdateResourceShareReqBody } from './UpdateResourceShareReqBody';


export class UpdateResourceShareRequest {
    private 'resource_share_id'?: string;
    public body?: UpdateResourceShareReqBody;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): UpdateResourceShareRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withBody(body: UpdateResourceShareReqBody): UpdateResourceShareRequest {
        this['body'] = body;
        return this;
    }
}