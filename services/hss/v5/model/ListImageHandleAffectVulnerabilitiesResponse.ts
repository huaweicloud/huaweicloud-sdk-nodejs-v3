import { ImageVulResponseInfo } from './ImageVulResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageHandleAffectVulnerabilitiesResponse extends SdkResponse {
    private 'total_vul_num'?: number;
    private 'vul_num'?: number;
    private 'image_num'?: number;
    private 'data_list'?: Array<ImageVulResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalVulNum(totalVulNum: number): ListImageHandleAffectVulnerabilitiesResponse {
        this['total_vul_num'] = totalVulNum;
        return this;
    }
    public set totalVulNum(totalVulNum: number  | undefined) {
        this['total_vul_num'] = totalVulNum;
    }
    public get totalVulNum(): number | undefined {
        return this['total_vul_num'];
    }
    public withVulNum(vulNum: number): ListImageHandleAffectVulnerabilitiesResponse {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withImageNum(imageNum: number): ListImageHandleAffectVulnerabilitiesResponse {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
    public withDataList(dataList: Array<ImageVulResponseInfo>): ListImageHandleAffectVulnerabilitiesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageVulResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageVulResponseInfo> | undefined {
        return this['data_list'];
    }
}