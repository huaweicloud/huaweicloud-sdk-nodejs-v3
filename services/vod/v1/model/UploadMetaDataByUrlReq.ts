import { UploadMetaDataByUrl } from './UploadMetaDataByUrl';


export class UploadMetaDataByUrlReq {
    private 'upload_metadatas'?: Array<UploadMetaDataByUrl>;
    public constructor(uploadMetadatas?: Array<UploadMetaDataByUrl>) { 
        this['upload_metadatas'] = uploadMetadatas;
    }
    public withUploadMetadatas(uploadMetadatas: Array<UploadMetaDataByUrl>): UploadMetaDataByUrlReq {
        this['upload_metadatas'] = uploadMetadatas;
        return this;
    }
    public set uploadMetadatas(uploadMetadatas: Array<UploadMetaDataByUrl>  | undefined) {
        this['upload_metadatas'] = uploadMetadatas;
    }
    public get uploadMetadatas(): Array<UploadMetaDataByUrl> | undefined {
        return this['upload_metadatas'];
    }
}