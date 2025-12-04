

export class CreateNet2CloudPhoneServerRequestBodyPublicIpEip {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): CreateNet2CloudPhoneServerRequestBodyPublicIpEip {
        this['type'] = type;
        return this;
    }
}