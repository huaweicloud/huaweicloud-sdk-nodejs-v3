import { CreateVpcAttachmentBody } from './CreateVpcAttachmentBody';


export class CreateVpcAttachmentRequest {
    private 'X-Client-Token'?: string | undefined;
    private 'er_id': string | undefined;
    public body?: CreateVpcAttachmentBody;
    public constructor(erId?: any) { 
        this['er_id'] = erId;
    }
    public withXClientToken(xClientToken: string): CreateVpcAttachmentRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
    public withErId(erId: string): CreateVpcAttachmentRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withBody(body: CreateVpcAttachmentBody): CreateVpcAttachmentRequest {
        this['body'] = body;
        return this;
    }
}