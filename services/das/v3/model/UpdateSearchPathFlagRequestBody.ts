

export class UpdateSearchPathFlagRequestBody {
    private 'search_path_flag'?: boolean;
    public constructor(searchPathFlag?: boolean) { 
        this['search_path_flag'] = searchPathFlag;
    }
    public withSearchPathFlag(searchPathFlag: boolean): UpdateSearchPathFlagRequestBody {
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