import { ObsObjInfo } from './ObsObjInfo';
import { ThumbnailPara } from './ThumbnailPara';


export class CreateThumbReq {
    public input: ObsObjInfo;
    public output: ObsObjInfo;
    private 'user_data'?: string | undefined;
    private 'thumbnail_para': ThumbnailPara | undefined;
    public tar?: number;
    public sync?: number;
    private 'original_dir'?: number | undefined;
    public constructor(input?: any, output?: any, thumbnailPara?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['thumbnail_para'] = thumbnailPara;
    }
    public withInput(input: ObsObjInfo): CreateThumbReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateThumbReq {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): CreateThumbReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withThumbnailPara(thumbnailPara: ThumbnailPara): CreateThumbReq {
        this['thumbnail_para'] = thumbnailPara;
        return this;
    }
    public set thumbnailPara(thumbnailPara: ThumbnailPara | undefined) {
        this['thumbnail_para'] = thumbnailPara;
    }
    public get thumbnailPara() {
        return this['thumbnail_para'];
    }
    public withTar(tar: number): CreateThumbReq {
        this['tar'] = tar;
        return this;
    }
    public withSync(sync: number): CreateThumbReq {
        this['sync'] = sync;
        return this;
    }
    public withOriginalDir(originalDir: number): CreateThumbReq {
        this['original_dir'] = originalDir;
        return this;
    }
    public set originalDir(originalDir: number | undefined) {
        this['original_dir'] = originalDir;
    }
    public get originalDir() {
        return this['original_dir'];
    }
}