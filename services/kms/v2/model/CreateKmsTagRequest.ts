import { CreateKmsTagRequestBody } from './CreateKmsTagRequestBody';


export class CreateKmsTagRequest {
    private 'key_id': string | undefined;
    public body?: CreateKmsTagRequestBody;
    public constructor(keyId?: any) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): CreateKmsTagRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withBody(body: CreateKmsTagRequestBody): CreateKmsTagRequest {
        this['body'] = body;
        return this;
    }
}