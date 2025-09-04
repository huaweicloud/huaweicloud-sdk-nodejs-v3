import { PageInfoDTO } from './PageInfoDTO';
import { QueryAppImageResponseDTO } from './QueryAppImageResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppImageResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    private 'app_images'?: Array<QueryAppImageResponseDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppImageResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ListAppImageResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withAppImages(appImages: Array<QueryAppImageResponseDTO>): ListAppImageResponse {
        this['app_images'] = appImages;
        return this;
    }
    public set appImages(appImages: Array<QueryAppImageResponseDTO>  | undefined) {
        this['app_images'] = appImages;
    }
    public get appImages(): Array<QueryAppImageResponseDTO> | undefined {
        return this['app_images'];
    }
}