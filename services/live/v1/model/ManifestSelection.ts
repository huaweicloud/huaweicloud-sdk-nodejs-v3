

export class ManifestSelection {
    private 'stream_order'?: ManifestSelectionStreamOrderEnum | string;
    private 'min_video_bandwidth'?: number;
    private 'max_video_bandwidth'?: number;
    public constructor() { 
    }
    public withStreamOrder(streamOrder: ManifestSelectionStreamOrderEnum | string): ManifestSelection {
        this['stream_order'] = streamOrder;
        return this;
    }
    public set streamOrder(streamOrder: ManifestSelectionStreamOrderEnum | string  | undefined) {
        this['stream_order'] = streamOrder;
    }
    public get streamOrder(): ManifestSelectionStreamOrderEnum | string | undefined {
        return this['stream_order'];
    }
    public withMinVideoBandwidth(minVideoBandwidth: number): ManifestSelection {
        this['min_video_bandwidth'] = minVideoBandwidth;
        return this;
    }
    public set minVideoBandwidth(minVideoBandwidth: number  | undefined) {
        this['min_video_bandwidth'] = minVideoBandwidth;
    }
    public get minVideoBandwidth(): number | undefined {
        return this['min_video_bandwidth'];
    }
    public withMaxVideoBandwidth(maxVideoBandwidth: number): ManifestSelection {
        this['max_video_bandwidth'] = maxVideoBandwidth;
        return this;
    }
    public set maxVideoBandwidth(maxVideoBandwidth: number  | undefined) {
        this['max_video_bandwidth'] = maxVideoBandwidth;
    }
    public get maxVideoBandwidth(): number | undefined {
        return this['max_video_bandwidth'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ManifestSelectionStreamOrderEnum {
    ORIGINAL = 'ORIGINAL',
    VIDEO_BITRATE_ASCENDING = 'VIDEO_BITRATE_ASCENDING',
    VIDEO_BITRATE_DESCENDING = 'VIDEO_BITRATE_DESCENDING'
}
