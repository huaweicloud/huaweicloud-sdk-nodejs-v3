

export class ListWatermarkTemplateRequest {
    public name?: string;
    public scene?: ListWatermarkTemplateRequestSceneEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ListWatermarkTemplateRequest {
        this['name'] = name;
        return this;
    }
    public withScene(scene: ListWatermarkTemplateRequestSceneEnum | string): ListWatermarkTemplateRequest {
        this['scene'] = scene;
        return this;
    }
    public withOffset(offset: number): ListWatermarkTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWatermarkTemplateRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWatermarkTemplateRequestSceneEnum {
    CLOUD_LIVE = 'cloud_live',
    MEDIA_LIVE = 'media_live'
}
