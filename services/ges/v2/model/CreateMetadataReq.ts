import { CreateMetadataReqGesMetadata } from './CreateMetadataReqGesMetadata';


export class CreateMetadataReq {
    private 'metadata_path'?: string;
    public name?: string;
    public description?: string;
    private 'is_overwrite'?: boolean;
    private 'ges_metadata'?: CreateMetadataReqGesMetadata;
    public constructor(metadataPath?: string, name?: string, description?: string, isOverwrite?: boolean, gesMetadata?: CreateMetadataReqGesMetadata) { 
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
    public set metadataPath(metadataPath: string  | undefined) {
        this['metadata_path'] = metadataPath;
    }
    public get metadataPath(): string | undefined {
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
    public set isOverwrite(isOverwrite: boolean  | undefined) {
        this['is_overwrite'] = isOverwrite;
    }
    public get isOverwrite(): boolean | undefined {
        return this['is_overwrite'];
    }
    public withGesMetadata(gesMetadata: CreateMetadataReqGesMetadata): CreateMetadataReq {
        this['ges_metadata'] = gesMetadata;
        return this;
    }
    public set gesMetadata(gesMetadata: CreateMetadataReqGesMetadata  | undefined) {
        this['ges_metadata'] = gesMetadata;
    }
    public get gesMetadata(): CreateMetadataReqGesMetadata | undefined {
        return this['ges_metadata'];
    }
}