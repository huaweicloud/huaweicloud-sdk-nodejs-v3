import { ImageSpritePara } from './ImageSpritePara';
import { ObsObjInfo } from './ObsObjInfo';


export class ImageSprite {
    public params?: ImageSpritePara;
    public output?: ObsObjInfo;
    private 'output_object_name'?: string;
    private 'webvtt_object_name'?: string;
    public constructor(params?: ImageSpritePara) { 
        this['params'] = params;
    }
    public withParams(params: ImageSpritePara): ImageSprite {
        this['params'] = params;
        return this;
    }
    public withOutput(output: ObsObjInfo): ImageSprite {
        this['output'] = output;
        return this;
    }
    public withOutputObjectName(outputObjectName: string): ImageSprite {
        this['output_object_name'] = outputObjectName;
        return this;
    }
    public set outputObjectName(outputObjectName: string  | undefined) {
        this['output_object_name'] = outputObjectName;
    }
    public get outputObjectName(): string | undefined {
        return this['output_object_name'];
    }
    public withWebvttObjectName(webvttObjectName: string): ImageSprite {
        this['webvtt_object_name'] = webvttObjectName;
        return this;
    }
    public set webvttObjectName(webvttObjectName: string  | undefined) {
        this['webvtt_object_name'] = webvttObjectName;
    }
    public get webvttObjectName(): string | undefined {
        return this['webvtt_object_name'];
    }
}