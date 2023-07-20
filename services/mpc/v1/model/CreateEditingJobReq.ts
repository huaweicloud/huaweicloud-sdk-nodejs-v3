import { ClipInfo } from './ClipInfo';
import { ConcatInfo } from './ConcatInfo';
import { EditSetting } from './EditSetting';
import { ImageWatermarkSetting } from './ImageWatermarkSetting';
import { MixInfo } from './MixInfo';
import { MultiConcatInfo } from './MultiConcatInfo';
import { ObsObjInfo } from './ObsObjInfo';
import { OutputSetting } from './OutputSetting';


export class CreateEditingJobReq {
    private 'edit_type'?: Array<string>;
    public clips?: Array<ClipInfo>;
    public concats?: Array<MultiConcatInfo>;
    public concat?: ConcatInfo;
    public mix?: MixInfo;
    public input?: ObsObjInfo;
    private 'output_setting'?: OutputSetting;
    private 'image_watermark_settings'?: Array<ImageWatermarkSetting>;
    private 'edit_settings'?: Array<EditSetting>;
    private 'user_data'?: string;
    public constructor() { 
    }
    public withEditType(editType: Array<string>): CreateEditingJobReq {
        this['edit_type'] = editType;
        return this;
    }
    public set editType(editType: Array<string>  | undefined) {
        this['edit_type'] = editType;
    }
    public get editType(): Array<string> | undefined {
        return this['edit_type'];
    }
    public withClips(clips: Array<ClipInfo>): CreateEditingJobReq {
        this['clips'] = clips;
        return this;
    }
    public withConcats(concats: Array<MultiConcatInfo>): CreateEditingJobReq {
        this['concats'] = concats;
        return this;
    }
    public withConcat(concat: ConcatInfo): CreateEditingJobReq {
        this['concat'] = concat;
        return this;
    }
    public withMix(mix: MixInfo): CreateEditingJobReq {
        this['mix'] = mix;
        return this;
    }
    public withInput(input: ObsObjInfo): CreateEditingJobReq {
        this['input'] = input;
        return this;
    }
    public withOutputSetting(outputSetting: OutputSetting): CreateEditingJobReq {
        this['output_setting'] = outputSetting;
        return this;
    }
    public set outputSetting(outputSetting: OutputSetting  | undefined) {
        this['output_setting'] = outputSetting;
    }
    public get outputSetting(): OutputSetting | undefined {
        return this['output_setting'];
    }
    public withImageWatermarkSettings(imageWatermarkSettings: Array<ImageWatermarkSetting>): CreateEditingJobReq {
        this['image_watermark_settings'] = imageWatermarkSettings;
        return this;
    }
    public set imageWatermarkSettings(imageWatermarkSettings: Array<ImageWatermarkSetting>  | undefined) {
        this['image_watermark_settings'] = imageWatermarkSettings;
    }
    public get imageWatermarkSettings(): Array<ImageWatermarkSetting> | undefined {
        return this['image_watermark_settings'];
    }
    public withEditSettings(editSettings: Array<EditSetting>): CreateEditingJobReq {
        this['edit_settings'] = editSettings;
        return this;
    }
    public set editSettings(editSettings: Array<EditSetting>  | undefined) {
        this['edit_settings'] = editSettings;
    }
    public get editSettings(): Array<EditSetting> | undefined {
        return this['edit_settings'];
    }
    public withUserData(userData: string): CreateEditingJobReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
}