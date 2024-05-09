import { CompareJobContentDetailInfo } from './CompareJobContentDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContentCompareDifferenceResponse extends SdkResponse {
    public count?: number;
    private 'target_meta_is_null'?: number;
    private 'source_meta_is_null'?: number;
    private 'source_target_meta_not_null'?: number;
    private 'contents_infos'?: Array<CompareJobContentDetailInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListContentCompareDifferenceResponse {
        this['count'] = count;
        return this;
    }
    public withTargetMetaIsNull(targetMetaIsNull: number): ListContentCompareDifferenceResponse {
        this['target_meta_is_null'] = targetMetaIsNull;
        return this;
    }
    public set targetMetaIsNull(targetMetaIsNull: number  | undefined) {
        this['target_meta_is_null'] = targetMetaIsNull;
    }
    public get targetMetaIsNull(): number | undefined {
        return this['target_meta_is_null'];
    }
    public withSourceMetaIsNull(sourceMetaIsNull: number): ListContentCompareDifferenceResponse {
        this['source_meta_is_null'] = sourceMetaIsNull;
        return this;
    }
    public set sourceMetaIsNull(sourceMetaIsNull: number  | undefined) {
        this['source_meta_is_null'] = sourceMetaIsNull;
    }
    public get sourceMetaIsNull(): number | undefined {
        return this['source_meta_is_null'];
    }
    public withSourceTargetMetaNotNull(sourceTargetMetaNotNull: number): ListContentCompareDifferenceResponse {
        this['source_target_meta_not_null'] = sourceTargetMetaNotNull;
        return this;
    }
    public set sourceTargetMetaNotNull(sourceTargetMetaNotNull: number  | undefined) {
        this['source_target_meta_not_null'] = sourceTargetMetaNotNull;
    }
    public get sourceTargetMetaNotNull(): number | undefined {
        return this['source_target_meta_not_null'];
    }
    public withContentsInfos(contentsInfos: Array<CompareJobContentDetailInfo>): ListContentCompareDifferenceResponse {
        this['contents_infos'] = contentsInfos;
        return this;
    }
    public set contentsInfos(contentsInfos: Array<CompareJobContentDetailInfo>  | undefined) {
        this['contents_infos'] = contentsInfos;
    }
    public get contentsInfos(): Array<CompareJobContentDetailInfo> | undefined {
        return this['contents_infos'];
    }
}