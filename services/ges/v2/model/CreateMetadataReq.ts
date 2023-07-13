import { CreateMetadataReqGesMetadata } from './CreateMetadataReqGesMetadata';


export class CreateMetadataReq {
    private 'metadata_path': string | undefined;
    public name: string;
    public description: string;
    private 'is_overwrite': boolean | undefined;
    private 'ges_metadata': CreateMetadataReqGesMetadata | undefined;
    public constructor(metadataPath?: any, name?: any, description?: any, isOverwrite?: any, gesMetadata?: any) { 
        this['metadata_path'] = metadataPath;
        this['name'] = name;
        this['description'] = description;
        this['is_overwrite'] = isOverwrite;
        this['ges_metadata'] = gesMetadata;
    }
    public withMetadataPath(metadataPath: string): CreateMetadataReq {
        this['metadata_path'] = metadataPath;
        return this;
    }
    public set metadataPath(metadataPath: string | undefined) {
        this['metadata_path'] = metadataPath;
    }
    public get metadataPath() {
        return this['metadata_path'];
    }
    public withName(name: string): CreateMetadataReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateMetadataReq {
        this['description'] = description;
        return this;
    }
    public withIsOverwrite(isOverwrite: boolean): CreateMetadataReq {
        this['is_overwrite'] = isOverwrite;
        return this;
    }
    public set isOverwrite(isOverwrite: boolean | undefined) {
        this['is_overwrite'] = isOverwrite;
    }
    public get isOverwrite() {
        return this['is_overwrite'];
    }
    public withGesMetadata(gesMetadata: CreateMetadataReqGesMetadata): CreateMetadataReq {
        this['ges_metadata'] = gesMetadata;
        return this;
    }
    public set gesMetadata(gesMetadata: CreateMetadataReqGesMetadata | undefined) {
        this['ges_metadata'] = gesMetadata;
    }
    public get gesMetadata() {
        return this['ges_metadata'];
    }
}