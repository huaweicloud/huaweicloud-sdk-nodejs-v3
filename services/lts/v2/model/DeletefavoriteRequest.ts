

export class DeletefavoriteRequest {
    private 'fav_res_id': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(favResId?: any, contentType?: any) { 
        this['fav_res_id'] = favResId;
        this['Content-Type'] = contentType;
    }
    public withFavResId(favResId: string): DeletefavoriteRequest {
        this['fav_res_id'] = favResId;
        return this;
    }
    public set favResId(favResId: string | undefined) {
        this['fav_res_id'] = favResId;
    }
    public get favResId() {
        return this['fav_res_id'];
    }
    public withContentType(contentType: string): DeletefavoriteRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}