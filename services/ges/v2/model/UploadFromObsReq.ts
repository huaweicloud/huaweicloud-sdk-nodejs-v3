import { UploadFromObsReqEncryption } from './UploadFromObsReqEncryption';


export class UploadFromObsReq {
    private 'metadata_path'?: string;
    public name?: string;
    public description?: string;
    public encryption?: UploadFromObsReqEncryption;
    public constructor(metadataPath?: string, name?: string) { 
        this['metadata_path'] = metadataPath;
        this['name'] = name;
    }
    public withMetadataPath(metadataPath: string): UploadFromObsReq {
        this['metadata_path'] = metadataPath;
        return this;
    }
    public set metadataPath(metadataPath: string  | undefined) {
        this['metadata_path'] = metadataPath;
    }
    public get metadataPath(): string | undefined {
        return this['metadata_path'];
    }
    public withName(name: string): UploadFromObsReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UploadFromObsReq {
        this['description'] = description;
        return this;
    }
    public withEncryption(encryption: UploadFromObsReqEncryption): UploadFromObsReq {
        this['encryption'] = encryption;
        return this;
    }
}