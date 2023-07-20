

export class DeleteKeypairRequest {
    private 'keypair_name'?: string;
    public constructor(keypairName?: string) { 
        this['keypair_name'] = keypairName;
    }
    public withKeypairName(keypairName: string): DeleteKeypairRequest {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
}