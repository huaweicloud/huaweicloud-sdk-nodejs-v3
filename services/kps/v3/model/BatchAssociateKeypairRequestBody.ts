import { AssociateKeypairRequestBody } from './AssociateKeypairRequestBody';


export class BatchAssociateKeypairRequestBody {
    private 'batch_keypairs'?: Array<AssociateKeypairRequestBody>;
    public constructor(batchKeypairs?: Array<AssociateKeypairRequestBody>) { 
        this['batch_keypairs'] = batchKeypairs;
    }
    public withBatchKeypairs(batchKeypairs: Array<AssociateKeypairRequestBody>): BatchAssociateKeypairRequestBody {
        this['batch_keypairs'] = batchKeypairs;
        return this;
    }
    public set batchKeypairs(batchKeypairs: Array<AssociateKeypairRequestBody>  | undefined) {
        this['batch_keypairs'] = batchKeypairs;
    }
    public get batchKeypairs(): Array<AssociateKeypairRequestBody> | undefined {
        return this['batch_keypairs'];
    }
}