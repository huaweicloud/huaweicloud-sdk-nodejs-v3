import { VaultOrderCreateReqs } from './VaultOrderCreateReqs';


export class CreatePostPaidVaultRequest {
    public body?: VaultOrderCreateReqs;
    public constructor() { 
    }
    public withBody(body: VaultOrderCreateReqs): CreatePostPaidVaultRequest {
        this['body'] = body;
        return this;
    }
}