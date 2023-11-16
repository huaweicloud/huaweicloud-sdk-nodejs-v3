import { OutPutResult } from './OutPutResult';


export class OutPutInfoResult {
    private 'package_info'?: OutPutResult;
    private 'package_infos'?: { [key: string]: OutPutResult; };
    private 'image_infos'?: { [key: string]: OutPutResult; };
    public constructor() { 
    }
    public withPackageInfo(packageInfo: OutPutResult): OutPutInfoResult {
        this['package_info'] = packageInfo;
        return this;
    }
    public set packageInfo(packageInfo: OutPutResult  | undefined) {
        this['package_info'] = packageInfo;
    }
    public get packageInfo(): OutPutResult | undefined {
        return this['package_info'];
    }
    public withPackageInfos(packageInfos: { [key: string]: OutPutResult; }): OutPutInfoResult {
        this['package_infos'] = packageInfos;
        return this;
    }
    public set packageInfos(packageInfos: { [key: string]: OutPutResult; }  | undefined) {
        this['package_infos'] = packageInfos;
    }
    public get packageInfos(): { [key: string]: OutPutResult; } | undefined {
        return this['package_infos'];
    }
    public withImageInfos(imageInfos: { [key: string]: OutPutResult; }): OutPutInfoResult {
        this['image_infos'] = imageInfos;
        return this;
    }
    public set imageInfos(imageInfos: { [key: string]: OutPutResult; }  | undefined) {
        this['image_infos'] = imageInfos;
    }
    public get imageInfos(): { [key: string]: OutPutResult; } | undefined {
        return this['image_infos'];
    }
}