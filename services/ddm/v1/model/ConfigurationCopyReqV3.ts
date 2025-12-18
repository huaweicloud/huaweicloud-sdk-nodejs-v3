import { ParaGroupCopy } from './ParaGroupCopy';


export class ConfigurationCopyReqV3 {
    private 'copy_para'?: ParaGroupCopy;
    private 'source_id'?: string;
    public constructor() { 
    }
    public withCopyPara(copyPara: ParaGroupCopy): ConfigurationCopyReqV3 {
        this['copy_para'] = copyPara;
        return this;
    }
    public set copyPara(copyPara: ParaGroupCopy  | undefined) {
        this['copy_para'] = copyPara;
    }
    public get copyPara(): ParaGroupCopy | undefined {
        return this['copy_para'];
    }
    public withSourceId(sourceId: string): ConfigurationCopyReqV3 {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
}