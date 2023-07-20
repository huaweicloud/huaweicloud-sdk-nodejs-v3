import { UpdateKeypairDescriptionRequestBody } from './UpdateKeypairDescriptionRequestBody';


export class UpdateKeypairDescriptionRequest {
    private 'keypair_name'?: string;
    public body?: UpdateKeypairDescriptionRequestBody;
    public constructor(keypairName?: string) { 
        this['keypair_name'] = keypairName;
    }
    public withKeypairName(keypairName: string): UpdateKeypairDescriptionRequest {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withBody(body: UpdateKeypairDescriptionRequestBody): UpdateKeypairDescriptionRequest {
        this['body'] = body;
        return this;
    }
}