import { KmsStructure } from './KmsStructure';


export class EncryptionStructure {
    public kms?: KmsStructure;
    public constructor(kms?: KmsStructure) { 
        this['kms'] = kms;
    }
    public withKms(kms: KmsStructure): EncryptionStructure {
        this['kms'] = kms;
        return this;
    }
}