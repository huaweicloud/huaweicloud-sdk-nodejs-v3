import { MulInputFileInfo } from './MulInputFileInfo';
import { ObsObjInfo } from './ObsObjInfo';


export class Subtitle {
    public input?: ObsObjInfo;
    public inputs?: Array<MulInputFileInfo>;
    private 'subtitle_type'?: number;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): Subtitle {
        this['input'] = input;
        return this;
    }
    public withInputs(inputs: Array<MulInputFileInfo>): Subtitle {
        this['inputs'] = inputs;
        return this;
    }
    public withSubtitleType(subtitleType: number): Subtitle {
        this['subtitle_type'] = subtitleType;
        return this;
    }
    public set subtitleType(subtitleType: number  | undefined) {
        this['subtitle_type'] = subtitleType;
    }
    public get subtitleType(): number | undefined {
        return this['subtitle_type'];
    }
}