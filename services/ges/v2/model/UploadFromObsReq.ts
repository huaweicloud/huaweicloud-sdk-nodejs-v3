import { UploadFromObsReqEncryption } from './UploadFromObsReqEncryption';


export class UploadFromObsReq {
    private 'metadata_path': string | undefined;
    public name: string;
    public description?: string;
    public encryption?: UploadFromObsReqEncryption;
    public constructor(metadataPath?: any, name?: any) { 
        this['metadata_path'] = metadataPath;
        this['name'] = name;
    }
    public withMetadataPath(metadataPath: string): UploadFromObsReq {
        this['metadata_path'] = metadataPath;
        return this;
    }
    public set metadataPath(metadataPath: string | undefined) {
        this['metadata_path'] = metadataPath;
    }
    public get metadataPath() {
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