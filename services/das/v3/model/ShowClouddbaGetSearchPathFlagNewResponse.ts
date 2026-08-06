
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClouddbaGetSearchPathFlagNewResponse extends SdkResponse {
    private 'search_path_flag'?: boolean;
    public constructor() { 
        super();
    }
    public withSearchPathFlag(searchPathFlag: boolean): ShowClouddbaGetSearchPathFlagNewResponse {
        this['search_path_flag'] = searchPathFlag;
        return this;
    }
    public set searchPathFlag(searchPathFlag: boolean  | undefined) {
        this['search_path_flag'] = searchPathFlag;
    }
    public get searchPathFlag(): boolean | undefined {
        return this['search_path_flag'];
    }
}