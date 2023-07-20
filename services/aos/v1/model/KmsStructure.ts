

export class KmsStructure {
    public id?: string;
    private 'cipher_text'?: string;
    public constructor(id?: string, cipherText?: string) { 
        this['id'] = id;
        this['cipher_text'] = cipherText;
    }
    public withId(id: string): KmsStructure {
        this['id'] = id;
        return this;
    }
    public withCipherText(cipherText: string): KmsStructure {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string  | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText(): string | undefined {
        return this['cipher_text'];
    }
}